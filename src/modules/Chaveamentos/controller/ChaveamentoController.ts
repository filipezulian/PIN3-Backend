import { Request, Response } from "express"
import { ListChaveamentoUseCase } from "../usecase/ListChaveamentoUseCase";
import { container } from "tsyringe";

class ChaveamentoController {
    async listChaveamento(request: Request, response: Response): Promise<Response>  {
        const listChaveamentoUseCase = container.resolve(ListChaveamentoUseCase);
        const chaveamentos = await listChaveamentoUseCase.execute();
        return response.status(201).send(chaveamentos)
    }
}

export { ChaveamentoController }
