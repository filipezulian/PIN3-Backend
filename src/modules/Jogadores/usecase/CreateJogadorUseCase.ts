import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../repository/IJogadorRepository";
import { AppError } from "@config/AppError";

@injectable()
class CreateJogadorUseCase {
    constructor(
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository
    ) { }

    async execute(name: string, gender: string, owner: number) {
        const jogador = await this.jogadorRepository.create(name, gender, owner)
        if (!jogador) {
            throw new AppError('There was an error creating a new Jogador', 401)
        }
        return jogador;
    }
}

export { CreateJogadorUseCase }
