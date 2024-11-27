import { getRepository, Repository } from "typeorm";
import { ICampeonatoRepository } from "./ICampeonatoRepository";
import { Campeonato } from "../entities/Campeonato";
import { AppError } from "@config/AppError";

class CampeonatoRepository implements ICampeonatoRepository {
    private campeonatoRepository: Repository<Campeonato>

    constructor(){
        this.campeonatoRepository = getRepository(Campeonato);
    }
    async create(camp_nome: string, camp_obs: string, esp_id: number, chav_id: number, camp_owner: number): Promise<Campeonato> {
        try {
            const campeonato = this.campeonatoRepository.create({
                camp_nome,
                camp_obs,
                esp_id,
                chav_id,
                camp_owner
            })  
            await this.campeonatoRepository.save(campeonato);
            return campeonato;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível criar o campeonato', 500)
        }
    }

}

export { CampeonatoRepository }