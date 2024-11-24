import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('campeonato')
class Campeonato {
    @PrimaryColumn()
    camp_id: number

    @Column()
    camp_nome: string

    @Column()
    esp_id: number

    @Column()
    chav_id: number

    @Column()
    camp_owner: number

    @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'camp_owner' })
    campeonato: Campeonato;

    constructor(){}

}

export { Campeonato }
