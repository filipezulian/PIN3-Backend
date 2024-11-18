import { getRepository, Repository } from "typeorm";
import { IUsuarioRepository } from "./IUsuarioRepository";
import { Usuario } from "../entities/Usuario";
import { AppError } from "@config/AppError";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createHash } from "crypto";

class UsuarioRepository implements IUsuarioRepository {
    private usuarioRepository: Repository<Usuario>;

    constructor() {
        this.usuarioRepository = getRepository(Usuario);
    }

    async login(user: Usuario, password: string): Promise<string> {
        try {
            const hashedPassword = createHash('sha256').update(password, 'utf8').digest('hex');
            if (hashedPassword !== user.usr_password) {
                throw new AppError('Invalid email or password', 401);
            }

            const token = jwt.sign(
                {
                    sub: user.usr_id,
                    name: user.usr_name,
                    email: user.usr_email,
                },
                process.env.JWT_SECRET!,
                { expiresIn: '1d' }
            );

            return token;
        } catch (err) {
            console.log(err);
            throw new AppError('Internal Server Error', 500)
        }
    }

    create(name: any, email: any, password: any): Promise<Usuario | any> {
        throw new Error("Method not implemented.");
    }

    async findUserByEmail(email: string) {
        try {
            return await this.usuarioRepository.findOne({
                where: {
                    usr_email: email
                }
            });
        } catch (error) {
            console.log(error);
            throw new AppError('Something went wrong retrieving the user', 500)
        }
    }

}

export { UsuarioRepository };
