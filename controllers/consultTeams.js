const database = require("../database");


//pegar todos times listados
exports.getTimes = (req, res) => {
    database.query('SELECT * FROM times').then((result) => {
        res.status(200).send({ Times: result.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

