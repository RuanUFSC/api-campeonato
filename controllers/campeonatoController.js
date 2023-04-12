
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

exports.getConsultarPartidas = (req, res) => {
  const query = "SELECT * FROM registro";
  database.query(query).then(
    (resultado) => {
      res.status(200).send({ result: resultado.rows });
    },
    (erro) => {
      res.status(404).send({ erro: erro });
    }
  )
}

exports.postInserirRegistro = (req,res) => {
    const query = "INSERT INTO registro (data, time_1, placar_1, time_2, placar_2) values ($1, $2, $3, $4, $5)"
    const values = [req.body.data, req.body.time_1, req.body.placar_1, req.body.time_2, req.body.placar_2]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ result: resultado.rows });
        },
        (erro) => {
          res.status(404).send({ erro: erro });
        }
    )
}
exports.deleteRegistro = (req,res) => {
    const query = "DELETE FROM registro WHERE partida_id = $1"
    const values = [req.params.id]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ result: "sucesso ao deletar" });
        },
        (erro) => {
          res.status(500).send({ erro: erro });
        }
    )
}