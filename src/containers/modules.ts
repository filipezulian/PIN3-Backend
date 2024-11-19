import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";
import { JogadorRepository } from "@modules/Jogadores/repository/JogadorRepository";
import { IUsuarioRepository } from "@modules/Users/repository/IUsuarioRepository";
import { UsuarioRepository } from "@modules/Users/repository/UsuarioRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsuarioRepository>(
    'UsuarioRepository',
    UsuarioRepository,
  );

container.registerSingleton<IJogadorRepository>(
    'JogadorRepository',
    JogadorRepository,
  );

  