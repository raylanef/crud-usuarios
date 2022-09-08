"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatQuery = void 0;
class FormatQuery {
    methodHttp(req) {
        let method = req.method;
        let params = [req.body.name, req.body.age, req.body.cep, req.body.neighborhood, req.body.city, req.body.state];
        let id = parseInt(req.params.posicao);
        console.log('chegou aqui');
        if (method == 'POST') {
            return {
                query: 'INSERT INTO usuarios(nome,idade,cep,bairro,localidade,uf) VALUES(?,?,?,?,?,?);',
                params: params
            };
        }
        if (method == 'PUT') {
            return {
                query: `UPDATE usuarios SET nome = ?,idade= ?,cep = ?, bairro = ?, localidade=?,uf=? WHERE id=${id};`,
                params: params
            };
        }
        if (method == 'DELETE') {
            return {
                query: 'DELETE FROM usuarios WHERE id=?;',
                params: [id]
            };
        }
        return { query: 'SELECT * FROM usuarios;' };
    }
}
exports.FormatQuery = FormatQuery;
