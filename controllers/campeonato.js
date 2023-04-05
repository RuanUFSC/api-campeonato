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