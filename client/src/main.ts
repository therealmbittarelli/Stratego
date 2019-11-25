// Make the DIV element draggable:
dragElement(document.getElementById('mydiv'));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//////////////////////
////////////////////////////////////////////

// Make the DIV element draggable:
dragHobbits(document.getElementById('myhobbits'));

function dragHobbits(elmnt) {
  let hob1 = 0, hob2 = 0, hob3 = 0, hob4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    hob3 = e.clientX;
    hob4 = e.clientY;
    document.onmouseup = closeDragHobbits;
    // call a function whenever the cursor moves:
    document.onmousemove = hobbitsDrag;
  }

  function hobbitsDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    hob1 = hob3 - e.clientX;
    hob2 = hob4 - e.clientY;
    hob3 = e.clientX;
    hob4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - hob2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - hob1) + 'px';
  }

  function closeDragHobbits() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//////////////////////
////////////////////////////////////////////

// Make the DIV element draggable:
dragEowyn(document.getElementById('myeowyn'));

function dragEowyn(elmnt) {
  let eow1 = 0, eow2 = 0, eow3 = 0, eow4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    eow3 = e.clientX;
    eow4 = e.clientY;
    document.onmouseup = closeDragEowyn;
    // call a function whenever the cursor moves:
    document.onmousemove = eowynDrag;
  }

  function eowynDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    eow1 = eow3 - e.clientX;
    eow2 = eow4 - e.clientY;
    eow3 = e.clientX;
    eow4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - eow2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - eow1) + 'px';
  }

  function closeDragEowyn() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}