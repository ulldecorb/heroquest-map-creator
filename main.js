let counterId = 0;

(function fillMapCells () {
    let map = document.getElementById("map");

    for(let i = 0; i < 494; i++){
        const cell = document.createElement( "DIV" );
        cell.setAttribute( "class", 'map__cell');
        cell.setAttribute( "ondrop", 'drop(event)' );
        cell.setAttribute( "ondragover", 'allowDrop(event)' );
        map.appendChild(cell);
    }
})()

function rotateElement (event) {
    const currentElement = document.getElementById(event.target.id);
    const wallClose = 'wall-close';
    const secretDoor = 'secret-door';
    const classIcon1x3 = 'icon-1x3';
    const classIcon3x2 = 'icon-3x2';

    switch(currentElement.style.transform){
        case 'rotate(0.25turn)':
            currentElement.style.transform = 'rotate(0.5turn)';
            event.target.className.includes(wallClose) && (currentElement.style.marginTop = 'calc(-88vh/52)');
            event.target.className.includes(wallClose) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '1.55vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '0');
        break;
        case 'rotate(0.5turn)':
            currentElement.style.transform = 'rotate(0.75turn)';
            event.target.className.includes(wallClose) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(wallClose) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '3.5vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-3.1vh');
        break;
        case 'rotate(0.75turn)':
            currentElement.style.transform = 'rotate(0turn)';
            event.target.className.includes(wallClose) && (currentElement.style.marginTop = 'calc(-88vh/52)');
            event.target.className.includes(wallClose) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '0');
        break;
        case 'rotate(0turn)':
            currentElement.style.transform = 'rotate(0.25turn)';
            event.target.className.includes(wallClose) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(wallClose) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '1.7vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '3.5vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-3.1vh');
        break;
        default:
            currentElement.style.transform = 'rotate(0.25turn)';
            event.target.className.includes(wallClose) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(wallClose) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '1.7vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '3.5vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-3.1vh');
        break;
    }
}

function deleteIcon(event) {
    const currentElement = document.getElementById(event.dataTransfer.getData("text"));
    currentElement.parentNode.removeChild(elementoArrastrado);
}



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    const selectIconToClone = document.getElementById(ev.target.id);
    const cloneIcon = selectIconToClone.cloneNode(true);
    cloneIcon.id = cloneIcon.id + counterId;
    // counterId += 1;
    console.log('cloneIcon =>' + typeof(cloneIcon.id)+' '+cloneIcon.id);
    console.log('ev.target.id =>' + typeof(ev.target.id)+' ' +ev.target.id);

    console.log(cloneIcon.isConnected);
    
    ev.dataTransfer.setData("text", ev.target.id);
    
    // ev.currentTarget.style.borderRadius = '50%';
    // ev.currentTarget.style.border = '2px solid red';
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    // console.log('data ' + data)

    // const selectIconToClone = document.getElementById(data);
    // const cloneIcon = selectIconToClone.cloneNode(true);
    // cloneIcon.id = cloneIcon.id + counterId;
    // counterId += 1;
    
    // console.log('cloneIcon =>' + typeof(cloneIcon.id)+' '+ cloneIcon.id);
    // console.log('ev.target.id =>' + typeof(ev.target.id)+' ' +ev.target.id);
    
    // console.log('conected? ' + cloneIcon.isConnected);
    // console.log(cloneIcon.isConnected);
    
    
    
    
    
    // const cloneIcon = data.cloneNode(true);
    // cloneIcon.id = e.dataTransfer.getData("text") + counterId;
    // counterId += 1;
    // data ? ev.target.appendChild(cloneIcon) : ev.target.removeChild(document.getElementById(data));    
    if (data.search(/[0-9]/) === -1)
    { 
        const selectIconToClone = document.getElementById(data);
        const cloneIcon = selectIconToClone.cloneNode(true);
        cloneIcon.id = cloneIcon.id + counterId;
        counterId += 1;
        ev.target.appendChild(cloneIcon) 
    }
    else{
        ev.target.appendChild(document.getElementById(data));    
    }
}



// function end(e){
// 	e.target.style.opacity = ''; // Pone la opacidad del elemento a 1 			
// 	e.dataTransfer.clearData("Data");
// }
// function enter(e) {
// 	e.target.style.border = '3px dotted #555'; 
// }
// function leave(e) {
// 	e.target.style.border = ''; 
// }