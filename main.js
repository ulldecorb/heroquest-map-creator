let counterId = 0;
fillMapCells();

function fillMapCells () {
    let map = document.getElementById("map");

    for(let i = 0; i < 494; i++){
        const cell = document.createElement( "DIV" );
        cell.id = 'cell' + i;
        cell.setAttribute( "class", 'map__cell');
        cell.setAttribute( "ondrop", 'drop(event)' );
        cell.setAttribute( "ondragover", 'allowDrop(event)' );
        map.appendChild(cell);
    }
}
// (function fillMapCells () {
//     let map = document.getElementById("map");

//     for(let i = 0; i < 494; i++){
//         const cell = document.createElement( "DIV" );
//         cell.id = 'cell' + i;
//         cell.setAttribute( "class", 'map__cell');
//         cell.setAttribute( "ondrop", 'drop(event)' );
//         cell.setAttribute( "ondragover", 'allowDrop(event)' );
//         map.appendChild(cell);
//     }
// })()

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

function resetMap() {
    const map = document.getElementById('map');
    map.innerHTML = '';
    fillMapCells();
}

function deleteIcon(event) {
    const elementToDelete = document.getElementById(event.dataTransfer.getData("text"));
    elementToDelete.parentNode.removeChild(elementToDelete);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.style.borderRadius = '50%';
    ev.style.border = '2px solid red';
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    data.search(/[0-9]/) === -1 
    ? ev.target.appendChild(cloneIcon(data)) 
    :ev.target.appendChild(document.getElementById(data));    
}

function cloneIcon(idToClone) {
    const selectIconToClone = document.getElementById(idToClone);
        const cloneIcon = selectIconToClone.cloneNode(true);
        cloneIcon.id = cloneIcon.id + counterId;
        cloneIcon.setAttribute( "tabindex", counterId);
        counterId += 1;
        return cloneIcon;
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