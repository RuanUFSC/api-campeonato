
const database = require('../database')
exports.consultaRegistro = (req, res) => {

    const time1 = req.body.time1
    const time2 = req.body.time2
    const consultaSQL = `select * from registro where time_1 =  '${time1}' and time_2 = '${time2}'`
    database
        .query(consultaSQL)
        .then((resultado) => {
            res.status(200).send(
                {
                    message: 'Dados consultados com sucesso!',
                    data: resultado.rows
                }
            );
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        })
}

exports.deletarTime = (req, res) => {
    const id = req.params.id
    const consultaSQL = `delete from times where id = ${id}`

    database
        .query(consultaSQL)
        .then((resultado) => {
            res.status(200).send(
                {
                    message: 'Dados apagados com sucesso!'
                    
                }
            );
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        })
}