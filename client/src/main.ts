import { DraggableElement } from './draggableElement';
import { GameClient } from './gameClient';



let client = new GameClient();

console.log("trying to connect to server");
client.connectToServer()
.then((attemptNum)=>{
    client.send("hello server");

    console.log(attemptNum, "Connected to server");

    let myGandalf = new DraggableElement('mygandalf');
    myGandalf.startListening();
    let myHobbits = new DraggableElement('myhobbits');
    myHobbits.startListening();
    let myEowyn = new DraggableElement('myeowyn');
    myEowyn.startListening();
        
})
.catch((err)=>{
    console.error("top level error caught:", err);
});
