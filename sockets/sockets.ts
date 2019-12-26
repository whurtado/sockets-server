import { Socket } from "socket.io";

//loginca para saber que cliente se desconecto
export const desconectar = (cliente: Socket ) => {

    cliente.on('disconnect', ()=> {
        console.log('Cliente desconectado');
    });
}

//Escuchar mensajes
export const mensaje = ( cliente: Socket, io: SocketIO.Server) => {

    //escucha el mensaje que llega
    cliente.on('mensaje', ( payload: { de: string, cuerpo: string} ) => {

        console.log ('Mensaje recibido---', payload);

        io.emit('mensaje-nuevo', payload);

    });
}