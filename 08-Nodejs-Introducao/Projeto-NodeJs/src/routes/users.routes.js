// Utilizando o roteamento do express;
const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

// Exemplo de Middleware;
function myMiddleware(request, response, next) {
  console.log('Passou pelo Middleware')

  next()
}


const usersController = new UsersController()

// Colocando o Middleware para todas as rotas;
// usersRoutes.use(myMiddleware)

// Colocando o Middleware para uma rota especifíca;
usersRoutes.post("/", myMiddleware, usersController.create)

// Exportando a rota para o server.js;
module.exports = usersRoutes
