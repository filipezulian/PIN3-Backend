import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    constructor() { }
}

export { Usuario }
