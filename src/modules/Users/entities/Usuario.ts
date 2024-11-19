import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
class Usuario {
    @PrimaryGeneratedColumn()
    usr_id: number;

    @Column({ length: 100 })
    usr_name: string;

    @Column({ length: 100 })
    usr_email: string;

    @Column({ length: 100 })
    usr_password: string;

    @OneToMany(() => Jogador, (jogador) => jogador.jog_owner)
    jogador: Jogador[];
    constructor() { }
}

export { Usuario }
