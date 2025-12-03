import express from 'express';
import {Server, createServer} from 'http';
import {Server as Io} from 'socket.io';
import router from './routes/index';
class App {
    public app : express.Application;
    public server: Server;
    private socketIo: Io;
    
    constructor(){
        this.app = express()
        this.server = createServer(this.app)
        this.socketIo= new Io(this.server, {
            cors: {
                origin: '*'
            }
        });

        this.app.use(express.json());
        this.app.use(router)

        this.socketIo.on('connection', socket => {
            console.log('Cliente Conectado')

            socket.on('disconnect',() =>{
                console.log ('Cliente Desconectado')
            })

            socket.on('sendMessage',({roomId, message}) =>{
                console.log( `Enviando mesnagem: ${message} para grupo: ${roomId} `) 
                socket.to(roomId).emit("roomMessage", message)
            })
            socket.on("join", (roomname)=>{
                    socket.join(roomname)
                    console.log(`Socket ${socket.id} entrou na sala ${roomname}`)
                })
            socket.on("leave", (roomId) => {
            socket.leave(roomId);
            console.log(`Socket ${socket.id} saiu da sala ${roomId}`);
        });
             
        });
        
    }
}

export default App