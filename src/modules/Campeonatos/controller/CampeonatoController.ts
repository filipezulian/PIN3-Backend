import { Request, Response } from "express";
import { CampeonatoCreateDTO } from "../dtos/CampeonatoCreateDTO";

class CampeonatoController {
    async create(request: Request, response: Response) {
        const data: CampeonatoCreateDTO = request.body as unknown as CampeonatoCreateDTO
        return response.status(201).send(data)
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
