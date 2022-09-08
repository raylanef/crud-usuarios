"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoute = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
class UsersRoute {
    constructor() {
        this.controller = new controller_1.UsersController();
        this.route = express_1.default.Router();
        this.rotas = [
            this.route.get('/', (req, res) => {
                this.controller.execute(req, res);
            }),
            this.route.post('/', (req, res) => {
                this.controller.execute(req, res);
            }),
            this.route.put('/:posicao', (req, res) => {
                this.controller.execute(req, res);
            }),
            this.route.delete('/:posicao', (req, res) => {
                this.controller.execute(req, res);
            })
        ];
    }
}
exports.UsersRoute = UsersRoute;
