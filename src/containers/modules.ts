import { ChaveamentoRepository } from "@modules/Chaveamentos/repository/ChaveamentoRepository";
import { IChaveamentoRepository } from "@modules/Chaveamentos/repository/IChaveamentoRepository";
import { EsporteRepository } from "@modules/Esportes/repository/EsporteRepository";
import { IEsporteRepository } from "@modules/Esportes/repository/IEsporteRepository";
import { EstatisticaJogadorRepository } from "@modules/EstatisticaJogador/repository/EstatisticaJogadorRepository";
import { IEstatisticaJogadorRepository } from "@modules/EstatisticaJogador/repository/IEstatisticaJogadorRepository";
import { EstatisticaTimeRepository } from "@modules/EstatisticaTime/repository/EstatisticaTimeRepository";
import { IEstatisticaTimeRepository } from "@modules/EstatisticaTime/repository/IEstatisticaTimeRepository";
import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";
import { JogadorRepository } from "@modules/Jogadores/repository/JogadorRepository";
import { ITimeRepository } from "@modules/Times/repository/ITimeRepository";
import { TimeRepository } from "@modules/Times/repository/TimeRepository";
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

container.registerSingleton<IEstatisticaJogadorRepository>(
  "EstatisticaJogadorRepository",
  EstatisticaJogadorRepository
);

container.registerSingleton<IChaveamentoRepository>(
  "ChaveamentoRepository",
  ChaveamentoRepository
);

container.registerSingleton<ITimeRepository>(
  "TimeRepository",
  TimeRepository
);

container.registerSingleton<IEstatisticaTimeRepository>(
  "EstatisticaTimeRepository",
  EstatisticaTimeRepository
);

container.registerSingleton<IEsporteRepository>(
  "EsporteRepository",
  EsporteRepository
);
