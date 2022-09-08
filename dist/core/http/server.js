"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const registerRoute_1 = require("../../modules/registerRoute");
class Server {
    constructor() {
        const options = {
            origin: '*',
            credentials: true,
            optionsSuccessStatus: 200
        };
        this.server = (0, express_1.default)();
        this.server.use((0, cors_1.default)(options));
        this.server.use(express_1.default.urlencoded({ extended: true }));
        this.server.use(body_parser_1.default.json());
        this.server.use(express_1.default.static('statics'));
        this.server.use(express_1.default.static('.', { index: './statics/index.html' }));
        this.port = 3333;
    }
    init() {
        new registerRoute_1.RegisterRoute().load(this.server);
        this.server.listen(this.port, () => {
            console.log('Server started on http://localhost:%s', this.port);
        });
    }
}
exports.default = Server;
