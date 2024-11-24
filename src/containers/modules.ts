import { ChaveamentoRepository } from "@modules/Chaveamentos/repository/ChaveamentoRepository";
import { IChaveamentoRepository } from "@modules/Chaveamentos/repository/IChaveamentoRepository";
import { EsporteRepository } from "@modules/Esportes/repository/EsporteRepository";
import { IEsporteRepository } from "@modules/Esportes/repository/IEsporteRepository";
import { EstatisticaJogadorRepository } from "@modules/rel_EstatisticaJogador/repository/EstatisticaJogadorRepository";
import { IEstatisticaJogadorRepository } from "@modules/rel_EstatisticaJogador/repository/IEstatisticaJogadorRepository";
import { EstatisticaTimeRepository } from "@modules/rel_EstatisticaTime/repository/EstatisticaTimeRepository";
import { IEstatisticaTimeRepository } from "@modules/rel_EstatisticaTime/repository/IEstatisticaTimeRepository";
import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";
import { JogadorRepository } from "@modules/Jogadores/repository/JogadorRepository";
import { ITimeJogadorRepository } from "@modules/rel_TimeJogador/repository/ITimeJogadorRepository";
import { TimeJogadorRepository } from "@modules/rel_TimeJogador/repository/TimeJogadorRepository";
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

container.registerSingleton<ITimeJogadorRepository>(
  "TimeJogadorRepository",
  TimeJogadorRepository
);
