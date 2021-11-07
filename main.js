fillMapCells();

function fillMapCells () {
    let map = document.getElementById("map");

    for(let i = 0; i < 494; i++){
        const cell = document.createElement( "DIV" );
        cell.setAttribute( "class", 'map__cell');
        cell.setAttribute( "ondrop", 'drop(event)' );
        cell.setAttribute( "ondragover", 'allowDrop(event)' );
        map.appendChild(cell);
    }
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