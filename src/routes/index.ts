import { swaggerRoutes } from "@config/swagger";
import { errorMiddleware } from "@middleware/AppError";
import { authRoutes } from "@modules/Auth/routes";
import { jogadorRoutes } from "@modules/Jogadores/routes/Index";
import { usuarioRoutes } from "@modules/Users/routes";
import { Router } from "express";

const router = Router();

const moduleRegister = [
  {
    name: 'Doc',
    url: '/doc',
    handlers: swaggerRoutes,
  },
  {
    name: 'Usuario',
    url: '/usuario',
    handlers: usuarioRoutes,
  },
  {
    name: 'Auth',
    url: '/',
    handlers: authRoutes,
  },
  {
    name: 'Jogador',
    url: '/jogador',
    handlers: jogadorRoutes,
  }
];

moduleRegister.map((module) => {
  router.use(module.url, module.handlers);
});

router.use(errorMiddleware);

export { router, moduleRegister };
