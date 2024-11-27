import { Authenticated } from "@middleware/Authorization";
import { CampeonatoController } from "../controller/CampeonatoController";
import { RegisterPaths } from "@routes/paths";

const campeonatoController = new CampeonatoController();

const paths = [
  /**
    * @swagger
    * /campeonatos:
    *   post:
    *     summary: Create Campeonato
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Campeonato
    *     description: Endpoint to Create Campeonato.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               camp_nome:
    *                 type: string
    *                 description: Name
    *                 example: 'teste 1'
    *               chav_id:
    *                 type: integer
    *                 description: Chaveamento selected
    *                 example: 1
    *               esp_id:
    *                 type: integer
    *                 description: esporte selected
    *                 example: 3
    *               camp_obs:
    *                 type: string
    *                 description: Campeonato obs
    *                 example: Esse eh um exemplo
    *               times:
    *                 type: array
    *                 items:
    *                   type: number
    *                 description: Array of times.
    *                 example: [15, 16]
    *     responses:
    *       200:
    *         description: Time created successfully
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
  {
    method: 'POST',
    moduleByName: 'Campeonato',
    url: '/',
    handlers: campeonatoController.create,
    middlewares: [Authenticated]
  },
];

const campeonatoRoutes = RegisterPaths({ paths });

export { campeonatoRoutes }
