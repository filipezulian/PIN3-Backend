import { Request, Response } from "express";
import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { container } from "tsyringe";
import { CreateTimeUseCase } from "../usecase/CreateTimesUseCase";

class TimeController {
    async create(request: Request, response: Response): Promise<Response> {
        const infoCreate: CreateTimeDTO = request.body as unknown as CreateTimeDTO;
        const userId = request.user.id;
        const createTimeUseCase = container.resolve(CreateTimeUseCase)
        const time = await createTimeUseCase.execute({tim_name: infoCreate.tim_name, tim_gender: infoCreate.tim_gender, tim_owner: userId});
        return response.status(201).send(time);
    }
}

export { TimeController }
