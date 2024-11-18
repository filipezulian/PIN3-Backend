import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";
import { AppError } from "@config/AppError";
import jwt from 'jsonwebtoken';
import { setToken } from "utils/tokenStore";

@injectable()
class LoginUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ) {}

    async execute(email: string, password: string) {
        try {
            if (!email || !password) {
                throw new AppError('Email and password are required', 400);
            }

            const user = await this.usuarioRepository.findUserByEmail(email);
            if (!user) {
                throw new AppError('Invalid email or password', 401);
            }

            const accessToken = await this.usuarioRepository.login(user, password);

            if (accessToken) {
                const refreshToken = jwt.sign(
                    { sub: user.usr_id },
                    process.env.JWT_SECRET!,
                    { expiresIn: '7d' }
                );

                console.log('Storing tokens:', user.usr_id, accessToken, refreshToken);

                setToken(user.usr_id, accessToken, refreshToken);
                return { accessToken, refreshToken };
            } 
            throw new AppError('Failed to generate token', 500);
        } catch (error) {
            console.error('Error in LoginUseCase:', error);
            throw new AppError('Internal Server Error', 500);
        }
    }
}

export { LoginUseCase }