const database = require('../database')

exports.deletarTime = (req, res) => {
  
    // Armazenando o comando SQL numa variável let
    const comando = `DELETE FROM registro WHERE partida_id = $1`;
    const valores = [req.params.id];
  
    // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
    database
      .query(comando, valores)
      .then(() => {
          res.status(200).send(
              {
                  message: `Partida removida com sucesso!`
              }
          );
      })
      .catch((erro) => {
        res.status(500).send({erro: erro});
      })
  }