import { IConfigMysql} from "./connection";


//Eu sei que não é uma boa pratica deixar as senhas expostas, mas entenda, é um teste hahaha !
let config: IConfigMysql = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cadastro'
}

export {config};