"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysql = void 0;
const mysql_1 = __importDefault(require("mysql"));
class Mysql {
    constructor(config) {
        this.connection = mysql_1.default.createPool(config);
        console.log("Connection created");
    }
    executeQuery(query) {
        console.log('Query no começo');
        console.log(query);
        return new Promise((resolve, reject) => {
            this.connection.query(query.query, query.params, (err, result) => {
                console.log(query);
                if (err)
                    reject(err);
                resolve(result);
                console.log(result);
            });
        });
    }
}
exports.Mysql = Mysql;
