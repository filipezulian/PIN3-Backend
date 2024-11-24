import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";
import { Chaveamento } from "../entities/Chaveamento";

interface IChaveamentoRepository {
    listChaveamento(): Promise<Chaveamento[]>;
    getChaveamentoById(chav_id: number): Promise<Chaveamento>;
    gerarChaveamento(data: CriarChaveamentoDTO);
}

export { IChaveamentoRepository }
