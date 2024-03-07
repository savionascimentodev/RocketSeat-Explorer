/**
 * ! Padrão de métodos criados em um Controller;
 * Index - GET para listar os registros;
 * Show - GET para exibir um registro especifíco;
 * Create - POST para criar um registro;
 * Update - PUT para atualizar um registro;
 * Delete - DELETE para remover um registro;
 */


const { hash } = require("bcryptjs")
const AppEror = require("../utils/AppError")
const sqliteConnectiom = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    // Fazendo a conexão com o banco;
    const database = await sqliteConnectiom()

    // Fazendo uma validação para ver se o usuário já existe
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExist) {
      throw new AppEror("Este usuário já existe")
    }

    const hashedPassword = await hash(password, 8)

    // Os parâmetros placeholders em uma instrução SQL são marcadores especiais que servem como espaços reservados para valores dinâmicos que serão inseridos na consulta durante a execução. Eles são representados por pontos de interrogação (?) e permitem que você construa consultas SQL genéricas que podem ser reutilizadas com diferentes conjuntos de dados.

    // Inserindo os dados no banco de dados;
    await database.run("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, hashedPassword])

    return response.status(201).json()

  }
}

module.exports = UsersController