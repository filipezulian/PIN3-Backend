import { RegisterPaths } from '@routes/paths';
import { UsuarioController } from '../controller/UsuarioController';
import { Authenticated } from '@middleware/Authorization';
const usuarioController = new UsuarioController();

const paths = [
  /**
   * @swagger
   * /usuario:
   *   post:
   *     summary: Cadastrar usuario
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Usuario
   *     description:
   *     parameters:
   *       - in: query
   *         name: usr_name
   *         description: Nome do usuario
   *         schema:
   *           type: string
   *           example: "Filipe"
   *         required: true
   *       - in: query
   *         name: usr_email
   *         description: Email do usuario
   *         schema:
   *           type: string
   *           example: "filipe.zulian@gmail.com"
   *         required: true
   *       - in: query
   *         name: usr_password
   *         description: Senha do usuario
   *         schema:
   *           type: string
   *           example: "safePassword123"
   *         required: true
   *     responses:
   *      201:
   *        description: User created successfully
   *      401:
   *        description: Token missing
   *      404:
   *        description: Dont exist any project for this id
   *      500:
   *        description: Internal server error
   */
  {
    method: 'POST',
    moduleByName: 'Usuario',
    url: '/',
    handlers: usuarioController.create,
    middlewares: [Authenticated]
  },
];

const usuarioRoutes = RegisterPaths({ paths });

export { usuarioRoutes };
