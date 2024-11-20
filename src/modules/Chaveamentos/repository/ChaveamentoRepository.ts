import { getRepository, Repository } from "typeorm";
import { Chaveamento } from "../entities/Chaveamento";
import { IChaveamentoRepository } from "./IChaveamentoRepository";
import { AppError } from "@config/AppError";

class ChaveamentoRepository implements IChaveamentoRepository {
    private chaveamentoRepository: Repository<Chaveamento>;

    constructor() {
        this.chaveamentoRepository = getRepository(Chaveamento);
    }

    async listChaveamento(): Promise<Chaveamento[]> {
        try {
            return await this.chaveamentoRepository.find();
        } catch (error) {
            console.log(error);
            throw new AppError('Não foi possível pegar chaveamentos', 500)
        }
    }
    getChaveamentoById(): Promise<Chaveamento> {
        throw new Error("Method not implemented.");
    }

}

export { ChaveamentoRepository }
