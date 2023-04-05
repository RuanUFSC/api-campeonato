// Driver de conexão com o banco de dados
const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// Definição da conexão 
const database = new pg.Client("postgres://ncxsdccf:bSMueRdHJX9Yl1sMXK0RQDd2at5zLMAs@babar.db.elephantsql.com/ncxsdccf");

// Abertura da conexão com o banco de dados
database.connect((erro) => {
    if(erro) {
        return console.log(`Não foi possível se conectar com o banco de dados, erro: ${erro}`);
    } else {
        return console.log(`Banco de dados conectado com sucesso!`);
    }
})

// Exportação da conexão com o banco de dados
module.exports = database