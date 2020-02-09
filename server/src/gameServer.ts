import WebSocket, {Server} from 'ws';

export class GameServer {
    private port: number = 3334;
    private server: Server;
    private clientMap: Set<WebSocket>;

    constructor(){
        this.clientMap = new Set<WebSocket>();
        this.server = new Server({ port: this.port });
    }

    public start() {
        this.server.on('connection', this.incomingConnection.bind(this));
        console.log("Listening for client connections...");
    }

    private incomingConnection(socket: WebSocket) {
        if(!this.clientMap.has(socket)) {
            console.log("New client connection");
            this.clientMap.add(socket);

            socket.on('message', (data: string)=>{
                this.receiveClientData(socket, data);
            });

            socket.on('close', ()=>{
                this.clientDisconnected(socket);
            });
        }
    }

    private receiveClientData(clientSocket: WebSocket, data:string) {
        console.log("Server received message:", data);
        clientSocket.send("Server replying to client!");
    }

    private clientDisconnected(clientSocket: WebSocket) {
        console.log("Client has disconnected");
        this.clientMap.delete(clientSocket);
    }
}
