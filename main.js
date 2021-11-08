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

duplicateMonsters();
function duplicateMonsters() {
    const monsters = document.getElementById('monsters');
    const skull = document.getElementById('skull');
    const skullCopy = skull.cloneNode(true);
    skullCopy.id = skull.id +'1';
    monsters.appendChild(skullCopy);
}

function rotateElement (event) {
    const currentElement = document.getElementById(event.target.id);

    switch(currentElement.style.transform){
        case 'rotate(0.25turn)':
            currentElement.style.transform = 'rotate(0.5turn)';
            break;
        case 'rotate(0.5turn)':
            currentElement.style.transform = 'rotate(0.75turn)';
            break;
        case 'rotate(0.75turn)':
            currentElement.style.transform = 'rotate(0turn)';
            break;
        case 'rotate(0turn)':
            currentElement.style.transform = 'rotate(0.25turn)';
            break;
        default:
            currentElement.style.transform = 'rotate(0.25turn)';
            break;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}