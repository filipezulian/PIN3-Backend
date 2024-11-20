import { EstatisticaJogador } from "@modules/EstatisticaJogador/entities/EstatisticaJogador";
import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('jogador')
class Jogador {
    @PrimaryGeneratedColumn()
    jog_id: number;

    @Column({ length: 100 })
    jog_name: string;

    @Column({ length: 10 })
    jog_gender: string;

    @Column({ unique: false })
    jog_owner: number;

    @OneToOne(() => EstatisticaJogador, estatistica => estatistica.jogador)
    estatistica: EstatisticaJogador;

    @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
        onDelete: 'CASCADE',
      })
      @JoinColumn({ name: 'jog_owner' })
      jogador: Jogador;

    constructor() { }
}

export { Jogador }
