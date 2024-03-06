const { Router } = require("express")

const usersRoute = require("./users.routes")

const routes = Router()

routes.use("/users", usersRoute)

// Exportando a rota para o server.js;
module.exports = routes