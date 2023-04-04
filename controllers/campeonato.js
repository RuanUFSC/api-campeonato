// Importando campeonato do models
const registro = require('../models/campeonato')

// exportando função para usar no routes
exports.menor_placar = (req, res) => {
    registro.menor_placar().then((resultado) => {
        res.status(200).send({ registro: resultado.rows })
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
}