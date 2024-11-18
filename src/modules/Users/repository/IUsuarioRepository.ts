import { Usuario } from "../entities/Usuario";


interface IUsuarioRepository {
    login(user: Usuario, password: string);
    findUserByEmail(email: string);
    create(name, email, password): Promise<Usuario | any>;
}

export { IUsuarioRepository }
