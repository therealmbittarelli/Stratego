import { DraggableElement } from './draggableElement';

let redPieces = [
  new DraggableElement('red-scout-1'), //scout1
  new DraggableElement('red-scout-2'), //scout2
  new DraggableElement('red-scout-3'), //scout3
  new DraggableElement('red-scout-4'), //scout4
  new DraggableElement('red-scout-5'), //scout5
  new DraggableElement('red-scout-6'), //scout6
  new DraggableElement('red-miner-1'), //miner1
  new DraggableElement('red-miner-2'), //miner2
  new DraggableElement('red-miner-3'), //miner3
  new DraggableElement('red-miner-4'), //miner4
  new DraggableElement('red-miner-5'), //miner5
  new DraggableElement('red-sergeant-1'), //sergeant1
  new DraggableElement('red-sergeant-2'), //sergeant2
  new DraggableElement('red-sergeant-3'), //sergeant3
  new DraggableElement('red-sergeant-4'), //sergeant4
  new DraggableElement('red-sergeant-5'), //sergeant5
  new DraggableElement('red-lieutenant-1'), //lieutenant1
  new DraggableElement('red-lieutenant-2'), //lieutenant2
  new DraggableElement('red-lieutenant-3'), //lieutenant3
  new DraggableElement('red-lieutenant-4'), //lieutenant4
  new DraggableElement('red-captain-1'), //captain1
  new DraggableElement('red-captain-2'), //captain2
  new DraggableElement('red-captain-3'), //captain3
  new DraggableElement('red-captain-4'), //captain4
  new DraggableElement('red-major-1'), //major1
  new DraggableElement('red-major-2'), //major2
  new DraggableElement('red-major-3'), //major3
  new DraggableElement('red-colonel-1'), //colonel1
  new DraggableElement('red-colonel-2'), //colonel2
  new DraggableElement('red-general'), //general
  new DraggableElement('red-marshal'), //marshal
  new DraggableElement('red-spy'), // spy
  new DraggableElement('red-flag'), // flag
  new DraggableElement('red-bomb-1'), //bomb1
  new DraggableElement('red-bomb-2'), //bomb2
  new DraggableElement('red-bomb-3'), //bomb3
  new DraggableElement('red-bomb-4'), //bomb4
  new DraggableElement('red-bomb-5'), //bomb5
  new DraggableElement('red-bomb-6'), //bomb6

];

let bluePieces = [
  new DraggableElement('blue-scout-1'), //scout1
  new DraggableElement('blue-scout-2'), //scout2
  new DraggableElement('blue-scout-3'), //scout3
  new DraggableElement('blue-scout-4'), //scout4
  new DraggableElement('blue-scout-5'), //scout5
  new DraggableElement('blue-scout-6'), //scout6
  new DraggableElement('blue-miner-1'), //miner1
  new DraggableElement('blue-miner-2'), //miner2
  new DraggableElement('blue-miner-3'), //miner3
  new DraggableElement('blue-miner-4'), //miner4
  new DraggableElement('blue-miner-5'), //miner5
  new DraggableElement('blue-sergeant-1'), //sergeant1
  new DraggableElement('blue-sergeant-2'), //sergeant2
  new DraggableElement('blue-sergeant-3'), //sergeant3
  new DraggableElement('blue-sergeant-4'), //sergeant4
  new DraggableElement('blue-sergeant-5'), //sergeant5
  new DraggableElement('blue-lieutenant-1'), //lieutenant1
  new DraggableElement('blue-lieutenant-2'), //lieutenant2
  new DraggableElement('blue-lieutenant-3'), //lieutenant3
  new DraggableElement('blue-lieutenant-4'), //lieutenant4
  new DraggableElement('blue-captain-1'), //captain1
  new DraggableElement('blue-captain-2'), //captain2
  new DraggableElement('blue-captain-3'), //captain3
  new DraggableElement('blue-captain-4'), //captain4
  new DraggableElement('blue-major-1'), //major1
  new DraggableElement('blue-major-2'), //major2
  new DraggableElement('blue-major-3'), //major3
  new DraggableElement('blue-colonel-1'), //colonel1
  new DraggableElement('blue-colonel-2'), //colonel2
  new DraggableElement('blue-general'), //general
  new DraggableElement('blue-marshal'), //marshal
  new DraggableElement('blue-spy'), // spy
  new DraggableElement('blue-flag'), // flag
  new DraggableElement('blue-bomb-1'), //bomb1
  new DraggableElement('blue-bomb-2'), //bomb2
  new DraggableElement('blue-bomb-3'), //bomb3
  new DraggableElement('blue-bomb-4'), //bomb4
  new DraggableElement('blue-bomb-5'), //bomb5
  new DraggableElement('blue-bomb-6'), //bomb6
]

for (let i = 0; i < redPieces.length; i++) {
  redPieces[i].startListening();
};

for (let i = 0; i < bluePieces.length; i++) {
  bluePieces[i].startListening();
};

// bluePieces.startListening();
// let myEowyn = new DraggableElement('myeowyn');
// myEowyn.startListening();
