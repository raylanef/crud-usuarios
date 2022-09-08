import mysql from 'mysql';
import { IQuery } from './formatQuery';

export interface IConfigMysql {
    host: string;
    user: string;
    port: number;
    password: string;
    database: string;
}

export class Mysql {
    private connection: any;

    constructor(config: IConfigMysql) {
        this.connection = mysql.createPool(config);
        console.log("Connection created")

    }


    public executeQuery(query: IQuery): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(query.query, query.params, (err: any, result: any) => {
                if (err) reject(err);
                resolve(result);
                console.log(result)
            });
        })
    }

}