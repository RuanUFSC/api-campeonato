const database = require('./database')

exports.consultarmenorplacar = (req, res, next) => {
    const placar = req.params.placar
    const query = 'SELECT * FROM registro ORDER BY placar_1 = 1$ ASC'.then(resultado)

    database.query(query, [placar]).then(() => {
        res.status(200).send({ placar_1: resultado.rows })
        }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.atualizarnometime = (req, res, next) => {
    const placar = req.params.nome
    const query = 'UPDATE times SET nome = 1$ WHERE nome = 2$; UPDATE pontuacao SET nome = 1$ WHERE nome = 2$; UPDATE registro SET time_1 = 1$ WHERE time_1 = 2$; UPDATE registro SET time_2 = 1$ WHERE time_2 = 2$;'.then(resultado)

    database.query(query, [placar]).then(() => {
        res.status(200).send('Atualizado')
        }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.removerPartida = (req, res, next) => {
    const idPartida = req.params.id
    const query = 'DELETE FROM registro WHERE partida_id=$1'
    
    database.query(query, [idPartida]).then(() => {
       res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
    }

    exports.consultaAsc = (req, res, next) => {
        const query = 'SELECT * FROM pontuacao order by pontuacao asc;'
        
        database.query(query).then(() => {
           res.status(200).send({ mensagem: 'Consultar por ordem crescente!' })
        }, (erro) => {
            res.status(500).send({ erro: erro })
        })
        }
    

