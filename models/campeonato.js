// Importando o banco
const database = require('./../database')

exports.menor_placar = () => {
    const query = "SELECT * FROM registro ORDER BY placar_1"
    return database.query(query)
}