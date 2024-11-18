import { IUsuarioRepository } from "@modules/Users/repository/IUsuarioRepository";
import { UsuarioRepository } from "@modules/Users/repository/UsuarioRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsuarioRepository>(
    'UsuarioRepository',
    UsuarioRepository,
  );

  