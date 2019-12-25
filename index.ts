import Server from "./clases/server";
import router  from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();

// configurar BodyParser
//para obtener data en formato JSON
server.app.use( bodyParser.urlencoded ({ extended: true}));
server.app.use( bodyParser.json() );

//configurar CORS
server.app.use ( cors ({ origin: true, credentials: true}))

server.app.use('/', router);


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});