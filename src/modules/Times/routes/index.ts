import { RegisterPaths } from '@routes/paths';
import { Authenticated } from '@middleware/Authorization';
import { TimeController } from '../controller/TimeController';
const timeController = new TimeController();

const paths = [
 /**
   * @swagger
   * /time:
   *   post:
   *     summary: Create a new Time
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Time
   *     description: Endpoint to create a new Time.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               tim_name:
   *                 type: string
   *                 description: The name of the time.
   *                 example: Turma do Gelol
   *               tim_gender:
   *                 type: string
   *                 description: The Time's gender (masculino, feminino, misto).
   *                 example: misto
   *     responses:
   *       200:
   *         description: Time created successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: number
   *                   example: 1
   *                 name:
   *                   type: string
   *                   example: Turma do gelol
   *                 gender:
   *                   type: string
   *                   example: misto
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'POST',
    moduleByName: 'Time',
    url: '/',
    handlers: timeController.create,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /time:
   *   delete:
   *     summary: Delete a Time
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Time
   *     description: Endpoint to Delete a Time.
   *     parameters:
   *       - in: query
   *         name: timeId
   *         description: Id do time
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
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
    method: 'DELETE',
    moduleByName: 'Time',
    url: '/',
    handlers: timeController.delete,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /time:
   *   get:
   *     summary: List your Times
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Time
   *     description: Endpoint to list your Times.
   *     responses:
   *       200:
   *         description: Times listed successfully
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'GET',
    moduleByName: 'Time',
    url: '/',
    handlers: timeController.listTimesByUsuario,
    middlewares: [Authenticated]
  },
 /**
   * @swagger
   * /time:
   *   put:
   *     summary: Edit your Time
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Time
   *     description: Endpoint to edit your Time.
   *     parameters:
   *       - in: query
   *         name: tim_id
   *         description: time's id
   *         schema:
   *           type: integer
   *           example: 1
   *         required: true
   *       - in: query
   *         name: tim_name
   *         description: time's name
   *         schema:
   *           type: string
   *           example: Filipe's time
   *         required: false
   *       - in: query
   *         name: tim_gender
   *         description: genero do time (masculino, feminino, misto)
   *         schema:
   *           type: string
   *           example: misto
   *         required: false
   *     responses:
   *       200:
   *         description: Times listed successfully
   *       401:
   *         description: Token missing or invalid
   *       400:
   *         description: Invalid or missing request body
   *       500:
   *         description: Internal server error
   */
  {
    method: 'PUT',
    moduleByName: 'Time',
    url: '/',
    handlers: timeController.edit,
    middlewares: [Authenticated]
  },
  /**
    * @swagger
    * /time/gerar:
    *   post:
    *     summary: Generate Times
    *     security:
    *       - bearerAuth: []
    *     tags:
    *       - Time
    *     description: Endpoint to Generate Times.
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               esporteId:
    *                 type: integer
    *                 description: Esporte selected
    *                 example: 1
    *               playersPerTeam:
    *                 type: integer
    *                 description: Amount of players per team
    *                 example: 2
    *               tim_gender:
    *                 type: string
    *                 description: The Time's gender (masculino, feminino, misto).
    *                 example: misto
    *               jogadores:
    *                 type: array
    *                 items:
    *                   type: integer
    *                 description: Array of jogadores.
    *                 example: [1,2,3,4,5,6,7,8]
    *     responses:
    *       200:
    *         description: Time created successfully
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 id:
    *                   type: number
    *                   example: 1
    *                 name:
    *                   type: string
    *                   example: Turma do gelol
    *                 gender:
    *                   type: string
    *                   example: misto
    *       401:
    *         description: Token missing or invalid
    *       400:
    *         description: Invalid or missing request body
    *       500:
    *         description: Internal server error
    */
   {
     method: 'POST',
     moduleByName: 'Time',
     url: '/gerar',
     handlers: timeController.gerarTimes,
     middlewares: [Authenticated]
   },
];

const timeRoutes = RegisterPaths({ paths });

export { timeRoutes };
