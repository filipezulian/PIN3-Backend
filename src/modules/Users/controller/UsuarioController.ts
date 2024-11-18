import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUseCase } from "../usecase/LoginUseCase";

class UsuarioController {
    async login(request: Request, response: Response): Promise<Response> {
        const { usr_email: email, usr_password: password } = request.body;
        const loginUseCase = container.resolve(LoginUseCase);
        const token = await loginUseCase.execute(email, password);
        return response.status(200).send(token);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { usr_name: name, usr_email: email, usr_password: password } = request.body;
        return response.status(200).send()
    }

}

export { UsuarioController }
