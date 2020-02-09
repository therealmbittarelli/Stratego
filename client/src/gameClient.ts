export class GameClient {
    private socket: WebSocket;
    
    public connectToServer() {
        return this.tryConnect();
    }

    private attemptNum:number = 0;
    private lastConnectTime = null;
    private tryConnect() {
        return new Promise<number|void>((resolve, reject)=>{
            let attempt = this.attemptNum++;
            console.log(attempt, "Attempting to connect...");
            if(this.lastConnectTime) {
                console.log(attempt, "Time since last connect", Date.now() - this.lastConnectTime);
                this.lastConnectTime = Date.now();
            }
            if(!this.lastConnectTime) { this.lastConnectTime = Date.now(); }

            let t = Date.now();
            this.socket = new WebSocket('ws://127.0.0.1:3334');
            let connected = false;

            this.socket.onopen = ()=>{
                connected = true;
                console.log(attempt, "Connected to server!");

                this.socket.onmessage = this.receivedServerData.bind(this);

                resolve(attempt);
            };
            this.socket.onclose = (event: CloseEvent)=>{
                console.log(attempt, "time taken for socket close:", Date.now() - t);
                console.error(attempt, "Socket close event code:", event.code);
                if(!connected) {
                    this.socket.close();
                    this.socket = null;
                }
                reject();
            };
        })
        .catch(()=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, 1000);
            })
            .then(()=>{
                return this.tryConnect();
            });
        });
    }

    public send(message: string) {
        if(this.socket) {
            this.socket.send(message);
        }
    }

    private receivedServerData(eventMessage: MessageEvent) {
        console.log("Received from server", eventMessage.data);
    }
}