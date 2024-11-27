import { Request, Response } from "express";
import { CreateCampeonatoDTO } from "../dtos/CreateCampeonatoDTO";
import { container } from "tsyringe";
import { CreateCampeonatoUseCase } from "../usecase/CreateCampeonatoUseCase";

class CampeonatoController {
    async create(request: Request, response: Response) {
        const dataCamp: CreateCampeonatoDTO = request.body as unknown as CreateCampeonatoDTO
        const camp_owner = request.user.id
        const createCampeonatoUseCase = container.resolve(CreateCampeonatoUseCase)
        const campeonato = await createCampeonatoUseCase.execute(dataCamp, camp_owner)
        return response.status(201).send(campeonato)
    }
    async edit(request: Request, response: Response) {
    }
    async finalizar(request: Request, response: Response) {
    }
    async view(request: Request, response: Response) {
    }
    async delete(request: Request, response: Response) {
    }
}

export { CampeonatoController }
