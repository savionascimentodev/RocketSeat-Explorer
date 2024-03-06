// Utilizando o roteamento do express;
const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", usersController.create)

// Exportando a rota para o server.js;
module.exports = usersRoutes
