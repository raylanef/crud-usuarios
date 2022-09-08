"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const config_1 = require("../../core/database/config");
const connection_1 = require("../../core/database/connection");
const formatQuery_1 = require("../../core/database/formatQuery");
class UsersService {
    constructor() {
        this.database = new connection_1.Mysql(config_1.config);
    }
    process(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.database.executeQuery(new formatQuery_1.FormatQuery().methodHttp(req));
                if (response.protocol41) {
                    return res.json({
                        message: "Deu certo"
                    });
                }
                return res.json(response);
            }
            catch (error) {
                return res.sendError('Hmmmm...parece que algo deu errado', error);
            }
        });
    }
}
exports.UsersService = UsersService;
