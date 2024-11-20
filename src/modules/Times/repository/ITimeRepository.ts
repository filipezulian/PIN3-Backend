import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { Time } from "../entities/Time";

interface ITimeRepository {
    create(infoCreate: CreateTimeDTO): Promise<Time>;
}

export { ITimeRepository }
