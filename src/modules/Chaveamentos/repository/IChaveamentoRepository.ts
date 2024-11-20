import { Chaveamento } from "../entities/Chaveamento";

interface IChaveamentoRepository {
    listChaveamento(): Promise<Chaveamento[]>;
    getChaveamentoById(): Promise<Chaveamento>;
}

export { IChaveamentoRepository }
