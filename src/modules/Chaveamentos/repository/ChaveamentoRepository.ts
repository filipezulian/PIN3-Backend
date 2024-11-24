import { getRepository, Repository } from "typeorm";
import { Chaveamento } from "../entities/Chaveamento";
import { IChaveamentoRepository } from "./IChaveamentoRepository";
import { AppError } from "@config/AppError";
import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";

class ChaveamentoRepository implements IChaveamentoRepository {
    private chaveamentoRepository: Repository<Chaveamento>;

    constructor() {
        this.chaveamentoRepository = getRepository(Chaveamento);
    }

    gerarChaveamento({chav_id, name, times}: CriarChaveamentoDTO) {
        try {
            if (chav_id === 1) {
                return this.generateSingleElimination(times, name);
            } else if (chav_id === 2) {
                return {
                    type: "free-for-all",
                    name: name,
                    times,
                };
            } else {
                throw new AppError("Tipo de chaveamento inválido", 400);
            }
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível gerar chaveamento agora, tente novamente mais tarde', 500)
        }
    }

    generateSingleElimination(teams: string[], name: string) {
        if ((teams.length & (teams.length - 1)) !== 0) {
            throw new AppError("A quantidade de times para eliminatória simples precisa ser uma potência de 2 (e.g., 4, 8, 16)", 400);
        }
        const rounds = [];
        let currentRoundTeams = [...teams];
        let roundNumber = 1;

        while (currentRoundTeams.length > 1) {
            const matches = [];
            for (let i = 0; i < currentRoundTeams.length; i += 2) {
                matches.push({
                    team1: currentRoundTeams[i],
                    team2: currentRoundTeams[i + 1],
                });
            }

            rounds.push({
                round: roundNumber,
                matches,
            });
                currentRoundTeams = matches.map((_, index) => `Winner ${index + 1}`);
            roundNumber++;
        }

        return {
            type: "single-elimination",
            name: name,
            rounds,
        };
    }

    async listChaveamento(): Promise<Chaveamento[]> {
        try {
            return await this.chaveamentoRepository.find();
        } catch (error) {
            console.log(error);
            throw new AppError('Não foi possível pegar chaveamentos', 500)
        }
    }

    getChaveamentoById(chav_id: number): Promise<Chaveamento> {
        try {
            const chaveamento = this.chaveamentoRepository.findOne({where: {
                chav_id: chav_id,
            }});

            return chaveamento;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar esse chaveamento', 500)
        }
    }

}

export { ChaveamentoRepository }
