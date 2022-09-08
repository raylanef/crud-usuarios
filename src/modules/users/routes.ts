import express, { Router } from "express";
import { UsersController } from "./controller";


export class UsersRoute {
    private controller: UsersController = new UsersController();
    private route = express.Router();
    private rotas: Router[];

    constructor() {
        this.rotas = [
            this.route.get('/', (req, res) =>{
                this.controller.execute(req,res);
            }),

            this.route.post('/', (req, res) => {
                this.controller.execute(req,res);
            }),

            this.route.put('/:posicao', (req, res) => {
                this.controller.execute(req,res);
            }),

            this.route.delete('/:posicao', (req, res) => {
                this.controller.execute(req,res);
            })


        ]

    }

}