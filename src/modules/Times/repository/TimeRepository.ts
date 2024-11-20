import { getRepository, Repository } from "typeorm";
import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { Time } from "../entities/Time";
import { ITimeRepository } from "./ITimeRepository";
import { AppError } from "@config/AppError";

class TimeRepository implements ITimeRepository {
    private timeRepository: Repository<Time>;

    constructor() {
        this.timeRepository = getRepository(Time);
    }


    async create(infoCreate: CreateTimeDTO): Promise<Time> {
        try {
            const time = this.timeRepository.create({
                tim_name: infoCreate.tim_name,
                tim_gender: infoCreate.tim_gender.toLowerCase(),
                tim_owner: infoCreate.tim_owner,
            })
    
            await this.timeRepository.save(time);
    
            return time;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel criar um time nesse momento, tente novamente mais tarde', 500)
        }
    }

}

export { TimeRepository }
