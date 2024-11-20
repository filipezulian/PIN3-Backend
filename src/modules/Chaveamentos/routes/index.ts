import { RegisterPaths } from '@routes/paths';
import { Authenticated } from '@middleware/Authorization';
import { ChaveamentoController } from '../controller/ChaveamentoController';
const chaveamentoController = new ChaveamentoController();

const paths = [
 /**
   * @swagger
   * /chaveamento:
   *   get:
   *     summary: Get all chaveamentos
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Chaveamento
   *     description: Endpoint to get all chaveamentos.
   *     responses:
   *       200:
   *         description: All chaveamentos
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'GET',
    moduleByName: 'Jogador',
    url: '/',
    handlers: chaveamentoController.listChaveamento,
    middlewares: [Authenticated]
  }
];

const chaveamentoRoutes = RegisterPaths({ paths });

export { chaveamentoRoutes };
