const database = require('../database');

exports.consultarRegistros = (req,res)=>{
    const time = req.params.time
    const select_ = `SELECT * FROM registro WHERE time_1 = '${time}' OR time_2 = '${time}'`;

    database.query(select_).then(
        (resultado) => res.status(200).send(resultado.rows),
        (erro)      => res.status(404).send(erro)
    );
}
exports.atualizarPlacar1 = (req,res)=>{
    const body = req.body;
    const update_ = `UPDATE registro SET placar_1 = ${body.placar_1} WHERE partida_id = ${body.id}`;

    database.query(update_).then(
        (resultado) => res.status(200).send("atualizado"),
        (erro)      => res.status(404).send(erro)
    );
}

exports.deletarPartida = (req,res)=>{
    const delete_ = `DELETE FROM registro WHERE partida_id=${req.params.id}`;

    database.query(delete_).then(
        (resultado) => res.status(200).send("deletado"),
        (erro)      => res.status(404).send(erro)
    );
}