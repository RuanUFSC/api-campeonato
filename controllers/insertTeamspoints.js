const database = require("../database");


exports.insertTeam = (req, res) => {
    const timenome = req.body.nome
    const query = `INSERT INTO times(nome) values( '${timenome}' );`
    const query2 = `INSERT INTO pontuacao(nome) values( '${timenome}');`

    database.query(query+query2).then(() => {
        res.status(200).send({ mensagem: 'Time inserido!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
