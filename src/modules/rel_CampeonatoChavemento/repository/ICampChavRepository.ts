import { CampeonatoChaveamento } from "../entities/CampeonatoChaveamento";

interface ICampChavRepository {
    // create(): Promise<CampeonatoChaveamento>
    create(camp_id: number, chaveamento: any): Promise<CampeonatoChaveamento>;
    validateExists(camp_id: number): Promise<boolean>
}

export { ICampChavRepository }
