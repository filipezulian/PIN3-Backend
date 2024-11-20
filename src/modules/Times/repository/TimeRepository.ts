import { getRepository, Repository } from "typeorm";
import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { Time } from "../entities/Time";
import { ITimeRepository } from "./ITimeRepository";
import { AppError } from "@config/AppError";
import { EstatisticaTime } from "@modules/EstatisticaTime/entities/EstatisticaTime";
import { EditTimeDTO } from "../dtos/EditTimeDTO";

class TimeRepository implements ITimeRepository {
    private timeRepository: Repository<Time>;
    private estatisticaRepository: Repository<EstatisticaTime>;

    constructor() {
        this.timeRepository = getRepository(Time);
        this.estatisticaRepository = getRepository(EstatisticaTime);
    }

    generateTimes(jogadores: number[], amountTimes: number, playersPerTeam: number) {
        try {
            //Embaralhando array de jogadores
            const shuffledPlayers = [...jogadores].sort(() => Math.random() - 0.5);
            const times: Record<string, { tim_name: string; jogadores: number[] }> = {};
            
            for (let generatedTeams = 0; generatedTeams < amountTimes; generatedTeams++) {
                //removendo jogador do array de jogadores para não ter duplicação
                const teamPlayers = shuffledPlayers.splice(0, playersPerTeam);
                times[`Time ${generatedTeams + 1}`] = {
                    tim_name: `Time ${generatedTeams + 1}`,
                    jogadores: teamPlayers,
                };
            }
            return times;
        } catch (error) {
            console.log(error);
            throw new AppError('Houve um erro ao gerar times, tente novamente mais tarde', 500);
        }
    }

    async edit(editInfo: EditTimeDTO): Promise<EditTimeDTO | any> {
        try {
            const time = await this.findTimeById(editInfo.tim_id)
            const timeAtualizado = {
                ...time,
                tim_name: editInfo.tim_name ?? time.tim_name,
                tim_gender: editInfo.tim_gender ?? time.tim_gender.toLowerCase(),
            };

            await this.timeRepository.save(timeAtualizado);

            return {
                tim_id: time.tim_id,
                tim_name: timeAtualizado.tim_name,
                tim_gender: timeAtualizado.tim_gender.toLowerCase(),
                tim_owner: time.tim_owner
            };

        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel editar esse time, tente novamente mais tarde', 500)
        }
    }

    async listByUsuario(usuarioId: number) {
        try {
            const times = await this.timeRepository.find({
                where: {
                    tim_owner: usuarioId
                }
            }) || [];

            const finalList = [];
            for (const time of times) {
                const estatistica = await this.estatisticaRepository.findOne({
                    where: {
                        time: time
                    }
                })

                finalList.push({
                    tim_id: time.tim_id,
                    tim_name: time.tim_name,
                    tim_gender: time.tim_gender,
                    estatistica: {
                        esttim_id: estatistica.esttim_id,
                        camp_vencidos: estatistica.camp_vencidos,
                        partidas_vencidas: estatistica.partidas_vencidas,
                        qntcamp: estatistica.qntcamp,
                        qntpartidas: estatistica.qntpartidas
                    }
                })
            }
            return finalList;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel retornar os seus times, tente novamente mais tarde', 500)
        }
    }

    async delete(time: Time) {
        try {
            await this.timeRepository.delete(time);
            return { 'message': 'Time deletado com sucesso!' }
        } catch (error) {
            console.log(error)
            throw new AppError('Houve um erro ao deletar o time, tente novamente mais tarde', 500)
        }
    }

    async findTimeById(timeId: number){
        try {
            const time = await this.timeRepository.findOne({
                where: {
                    tim_id: timeId
                }
            })
            return {
                tim_id: time.tim_id,
                tim_name: time.tim_name,
                tim_gender: time.tim_gender,
                tim_owner: time.tim_owner
            }

        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar esse time, tente novamente mais tarde', 500)
        }
    }


    async create(infoCreate: CreateTimeDTO) {
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
