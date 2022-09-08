"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoute = void 0;
const routes_1 = require("./users/routes");
class RegisterRoute {
    constructor() {
        this.routes = [new routes_1.UsersRoute()].flatMap(r => r['route']);
    }
    load(server) {
        this.routes.forEach(r => {
            server.use('/usuarios', r);
        });
    }
}
exports.RegisterRoute = RegisterRoute;
