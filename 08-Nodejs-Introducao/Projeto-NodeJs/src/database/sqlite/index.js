// Importa a biblioteca `sqlite3`, que fornece interface de baixo nível para SQLite.
const sqlite3 = require("sqlite3");

// Importa a biblioteca `sqlite`, que oferece API de alto nível e baseada em promises para SQLite.
const sqlite = require("sqlite");

// Importa o módulo `path` para manipular caminhos de arquivos.
const path = require("path");

// Função assíncrona para estabelecer conexão com o banco de dados SQLite.
async function sqliteConnection() {
  // Define o caminho para o arquivo do banco de dados.
  const databasePath = path.resolve(__dirname, "..", "database.db");

  // Estabelece a conexão com o banco de dados usando a biblioteca `sqlite`.
  // Especifica o driver `sqlite3.Database` para garantir compatibilidade.
  const database = await sqlite.open({
    filename: databasePath,
    driver: sqlite3.Database,
  });

  return database;
}

module.exports = sqliteConnection;
