let counterId = 0;
fillMapCells();
document.getElementById('map').onkeydown = function(event) { cloneItemOnMap(event) };

const monstersTitle = document.getElementById('icons__monsters-title');
const furnitureTitle = document.getElementById('icons__furniture-title');
const doorsTitle = document.getElementById('icons__doors-title');

monstersTitle.addEventListener('click', () => {
    const monsters = document.getElementById('monsters');
    monsters.style.display === 'flex' ? monsters.style.display = 'none' : monsters.style.display = 'flex';
})
furnitureTitle.addEventListener('click', () => {
    const furniture = document.getElementById('furniture');
    furniture.style.display === 'flex' ? furniture.style.display = 'none' : furniture.style.display = 'flex';
})
doorsTitle.addEventListener('click', () => {
    const doors = document.getElementById('doors');
    doors.style.display === 'flex' ? doors.style.display = 'none' : doors.style.display = 'flex';
})


// document.addEventListener('keydown', cloneItemOnMap(event));

// function test(e) {
//     console.log(e.key);
//     alert(e.key);
    // alert('guay');
// }

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

function rotateElement (event) {
    const currentElement = document.getElementById(event.target.id);
    const door = 'door';
    const secretDoor = 'secret-door';
    const classIcon1x3 = 'icon-1x3';
    const classIcon1x2 = 'icon-1x2';
    const classIcon3x2 = 'icon-3x2';

    switch(currentElement.style.transform){
        case 'rotate(0.25turn)':
            currentElement.style.transform = 'rotate(0.5turn)';
            event.target.className.includes(door) && (currentElement.style.marginTop = 'calc(-88vh/52)');
            event.target.className.includes(door) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '1.55vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '0');
        break;
        case 'rotate(0.5turn)':
            currentElement.style.transform = 'rotate(0.75turn)';
            event.target.className.includes(door) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(door) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginTop = '2.2vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginLeft = '-2.2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '4.6vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-4.4vh');
        break;
        case 'rotate(0.75turn)':
            currentElement.style.transform = 'rotate(0turn)';
            event.target.className.includes(door) && (currentElement.style.marginTop = 'calc(-88vh/52)');
            event.target.className.includes(door) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '0');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '0');
        break;
        case 'rotate(0turn)':
            currentElement.style.transform = 'rotate(0.25turn)';
            event.target.className.includes(door) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(door) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '1.7vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginTop = '2.2vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginLeft = '-2.2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '4.6vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-4.4vh');
        break;
        default:
            currentElement.style.transform = 'rotate(0.25turn)';
            event.target.className.includes(door) && (currentElement.style.marginTop = '0.1vh');
            event.target.className.includes(door) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(secretDoor) && (currentElement.style.marginTop = '0');
            event.target.className.includes(secretDoor) && (currentElement.style.marginLeft = '1.7vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginTop = '2.2vh');
            event.target.className.includes(classIcon1x2) && (currentElement.style.marginLeft = '-2.2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginTop = '2vh');
            event.target.className.includes(classIcon3x2) && (currentElement.style.marginLeft = '-1.7vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginTop = '4.6vh');
            event.target.className.includes(classIcon1x3) && (currentElement.style.marginLeft = '-4.4vh');
        break;
    }
}

function resetMap() {
    const map = document.getElementById('map');
    map.innerHTML = '';
    fillMapCells();
}

function deleteIcon(event) {
    const data = event.dataTransfer.getData("text");
    const elementToDelete = document.getElementById(data);
    data.search(/[0-9]/) !== -1 &&
    elementToDelete.parentNode.removeChild(elementToDelete);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    // ev.style.borderRadius = '50%';
    // ev.style.border = '2px solid red';
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    data.search(/[0-9]/) === -1 
    ? ev.target.appendChild(cloneIcon(data)) 
    : ev.target.appendChild(document.getElementById(data));    
}

function cloneIcon(idToClone) {
    const selectIconToClone = document.getElementById(idToClone);
        const cloneIcon = selectIconToClone.cloneNode(true);
        cloneIcon.id = cloneIcon.id + counterId;
        cloneIcon.setAttribute( "tabindex", counterId);
        counterId += 1;
        return cloneIcon;
}

function cloneItemOnMap(event){
    // ev.preventDefault();
    // const data = ev.dataTransfer.getData("text");
    // e.key === 'Control' && ev.target.appendChild(document.getElementById(data).cloneNode(true))
    // function firstOk(event) {
    //     return event.key === 'Control';
    // }
    // function secondOk(event) {
    //     return event.key === 'Control';
    // }
    if (event.key === 'Control') { alert('guai 2') };
}

function savePDF(divId, title) {
    doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
    doc.save('div.pdf');
}

function printDiv(divId,
    title) {
  
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
  
    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(divId).innerHTML);
    mywindow.document.write('</body></html>');
  
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
  
    mywindow.print();
    mywindow.close();
  
    return true;
}

function printTest() {
    var c = document.getElementById('map');
    var t = c.getContext('2d');
    window.open('', t.toDataURL());}
