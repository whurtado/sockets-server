
import express from 'express';
import { SERVER_PORT } from '../global/environment';


export default class Server {

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    //metodo para levantar la aplicacion o servidor
    start( callback: Function) {

        this.app.listen( this.port, callback);

    }
}