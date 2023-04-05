// Importando o banco
const database = require('./../database')
// Importando campeonato do models

exports.menor_placar = (req, res) => {
    const query = "SELECT * FROM registro ORDER BY placar_1";
    database.query(query).then((resultado) => {
        res.status(200).send({ registro: resultado.rows })
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.atualizarTime = (req, res) => {
    const query = "UPDATE times SET nome = $1 WHERE id = $2";
    const valores = [
        req.body.nome,
        req.params.id
    ];
    database.query(query, valores).then(() => {
        res.status(200).send({ message: `Time atualizado com sucesso!` });
    }).catch((erro) => {
        res.status(500).send({ erro: erro });
    })
}

exports.deletarTime = (req, res) => {
    // Armazenando o comando SQL numa variável let
    const query = `DELETE FROM registro WHERE partida_id = $1`;
    const valores = [req.params.id];
    // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
    database.query(query, valores).then(() => {
        res.status(200).send({ message: `Partida removida com sucesso!` });
    }).catch((erro) => {
        res.status(500).send({ erro: erro });
    })
}