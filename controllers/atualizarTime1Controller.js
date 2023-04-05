const database = require('../database')

exports.atualizarTime1 = (req, res) => {
  
    const comando = `
      UPDATE registro 
      SET time_1 = $1
      WHERE partida_id = $2`;
  
    const valores = [
        req.body.time_1, 
        req.params.id
    ];
  
    database
      .query(comando, valores)
      .then(() => {
          res.status(200).send(
              {
                  message: `Time1 atualizado com sucesso!`
              }
          );
      })
      .catch((erro) => {
        res.status(500).send({erro: erro});
      })
}