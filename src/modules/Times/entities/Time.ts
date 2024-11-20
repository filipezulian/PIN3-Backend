import { EstatisticaTime } from "@modules/EstatisticaTime/entities/EstatisticaTime";
import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('time')
class Time {
    @PrimaryGeneratedColumn()
    tim_id: number;

    @Column({ length: 100 })
    tim_name: string;

    @Column({ length: 100 })
    tim_gender: string;

    @Column()
    tim_owner: number;
    
    @OneToOne(() => EstatisticaTime, estatistica => estatistica.time)
    estatistica: EstatisticaTime;

    @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
        onDelete: 'CASCADE',
      })
      @JoinColumn({ name: 'tim_owner' })
      time: Time;
    
    constructor() { }
}

export { Time }
