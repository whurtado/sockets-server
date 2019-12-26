
import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';


export default class Server {

    private static _intance:Server;

    public app: express.Application;
    public port: number;

    //configuracion de la conexion de los sockets
    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer );

        this.escucharSockets();
    }

     //aplicar modelo singleton para evitar instanciar mas de una vez el socket
     public static get instance() {

        //retorna una instancia sy si no esta creada la declara
        return this._intance || ( this,this._intance = new this());
     }
    private escucharSockets(){

        console.log('Escuchando conexiones- sockets');

        //saber cuando un cliente se conecta a la aplicacion
        this.io.on ('connection', cliente => {

            console.log('nuevo cliente conectado');

            //Mensaje
            socket.mensaje( cliente, this.io );

            socket.desconectar( cliente);

            
            
        })
    }

    //metodo para levantar la aplicacion o servidor
    start( callback: Function) {

        this.httpServer.listen( this.port, callback);

    }
}