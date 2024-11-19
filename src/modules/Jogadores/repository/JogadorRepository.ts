import { AppError } from "@config/AppError";
import { Jogador } from "../entities/Jogador";
import { IJogadorRepository } from "./IJogadorRepository";
import { getRepository, Repository } from "typeorm";
import { JogadorDTO } from "../dtos/JogadorDTO";

class JogadorRepository implements IJogadorRepository {
    private jogadorRepository: Repository<Jogador>;

    constructor() {
        this.jogadorRepository = getRepository(Jogador);
    }

    async delete(jogador) {
        try {
            return await this.jogadorRepository.delete(jogador);
        } catch (error) {
            console.log(error)
            throw new AppError('Ocorreu um erro ao tentar deletar esse Jogador', 401)
        }
    }

    async jogadorById(id: number, ownerId: number) {
        try {
            const jogador = await this.jogadorRepository.findOne({
                where: {
                    jog_id: id,
                    jog_owner: ownerId
                }
            });
            if (jogador) {
                return jogador;
            } else {
                throw new AppError('Jogador não foi encontrado', 404)
            }
        } catch (error) {
            console.log(error)
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async editarJogador(id: number, ownerId: number, name?: string, gender?: string): Promise<JogadorDTO | any> {
        try {
            const jogador = await this.jogadorById(id, ownerId);

            if (!jogador) {
                throw new AppError('Jogador não encontrado', 404);
            }

            const jogadorAtualizado = {
                ...jogador,
                jog_name: name ?? jogador.jog_name,
                jog_gender: gender ?? jogador.jog_gender,
            };

            await this.jogadorRepository.save(jogadorAtualizado);

            return {
                id: jogador.jog_id,
                owner: ownerId,
                name: jogadorAtualizado.jog_name,
                gender: jogadorAtualizado.jog_gender,
            };
        } catch (error) {
            console.log(error);
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async create(name: string, gender: string, ownerId: number): Promise<JogadorDTO | any> {
        try {
            const jogador = this.jogadorRepository.create({
                jog_name: name,
                jog_gender: gender,
                jog_owner: ownerId
            })
            await this.jogadorRepository.save(jogador);
            return {
                jog_id: jogador.jog_id,
                jog_name: jogador.jog_name,
                jog_gender: jogador.jog_gender,
                owner: jogador.jog_owner
            }
        } catch (error) {
            console.log(error)
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }
    async listJogadorByOwner(ownerId: number): Promise<Jogador[]> {
        try {
            return await this.jogadorRepository.find({
                where: {
                    jog_owner: ownerId
                }
            }) || [];
        } catch (error) {
            console.log(error)
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }

}

export { JogadorRepository }
