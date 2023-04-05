const database = require('../database')

exports.equipeDecrescente = (req, res) => {
  
const comando = `SELECT * FROM pontuacao ORDER BY pontuacao DESC`
  
    database
      .query(comando)
      .then((resultado) => {
          res.status(200).send(
              {
                  message: 'Dados consultados com sucoesso!',
                  data: resultado.rows 
              }
          );
      })
      .catch((erro) => {
        res.status(500).send({erro: erro});
      })
}


