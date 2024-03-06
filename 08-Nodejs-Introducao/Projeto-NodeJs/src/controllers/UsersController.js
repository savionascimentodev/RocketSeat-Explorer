/**
 * ! Padrão de métodos criados em um Controller;
 * Index - GET para listar os registros;
 * Show - GET para exibir um registro especifíco;
 * Create - POST para criar um registro;
 * Update - PUT para atualizar um registro;
 * Delete - DELETE para remover um registro;
 */

const AppEror = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppEror("O nome é obrigatório", 400)
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController