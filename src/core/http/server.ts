import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { RegisterRoute } from "../../modules/registerRoute";

export default class Server {
  private server: express.Application;
  private port: number;


  constructor() {

    const options: cors.CorsOptions = {
      origin: '*',
      credentials: true,
      optionsSuccessStatus: 200
    }

    this.server = express();
    this.server.use(cors(options));
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
    this.server.use(express.static('statics'));
    this.server.use(express.static('.', { index: './statics/index.html' }));
    this.port = 3333;

  }

  public init(): void {
    new RegisterRoute().load(this.server);
    this.server.listen(this.port, () => {
      console.log('Server started on http://localhost:%s', this.port);
    });
  }



}