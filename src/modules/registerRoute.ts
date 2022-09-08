import express, { Router } from "express";
import { UsersRoute } from "./users/routes";

export class RegisterRoute {
    readonly routes : Router[]= [new UsersRoute()].flatMap(r => r['route']);
    
    public load(server: express.Application){
        this.routes.forEach( r => {
            server.use('/usuarios', r);
        })
    }
}