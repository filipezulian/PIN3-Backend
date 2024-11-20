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
];

const timeRoutes = RegisterPaths({ paths });

export { timeRoutes };
