import { UsuarioController } from "@modules/Users/controller/UsuarioController";
import { RegisterPaths } from "@routes/paths";
const usuarioController = new UsuarioController();
const paths = [
    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Login
     *     tags:
     *       - Login
     *     description:
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               usr_email:
     *                 type: string
     *                 description: User Email.
     *                 example: "filipe.zulian@gmail.com"
     *               usr_password:
     *                 type: string
     *                 description: User password.
     *                 example: "SafePassword123"
     *     responses:
     *      201:
     *        description: Sucessful login
     *      401:
     *        description: Token missing
     *      404:
     *        description: Dont exist any project for this id
     *      500:
     *        description: Internal server error
     */
    {
        method: 'POST',
        moduleByName: 'login',
        url: '/',
        handlers: usuarioController.login,
        middlewares: []
    },
];

const authRoutes = RegisterPaths({ paths })

export { authRoutes };
