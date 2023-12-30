
const charsElement = document.getElementById('chars');
const rowsElement = document.getElementById('rows');


function generateChars(chars) {
    for(let key of Object.keys(chars)) {
        const divElement = document.createElement('div');
        divElement.classList = 'char';
        const cElement = document.createElement('p');
        const valueElement = document.createElement('p');
        cElement.innerHTML = key.toUpperCase();
        valueElement.innerHTML = chars[key];
        divElement.appendChild(cElement);
        divElement.appendChild(valueElement);
        charsElement.appendChild(divElement);
    }
}


function showPuzzle(puzzle) {
    clearPuzzle();
    for(let row of puzzle) {
        const rowElement = document.createElement('div');
        const rowSolution = document.createElement('div');
        const rowText = document.createElement('p');
        rowElement.classList = 'row';
        rowText.innerHTML = row;
        rowSolution.classList = 'solution_space'
        rowElement.appendChild(rowText);
        rowElement.appendChild(rowSolution);
        rowsElement.appendChild(rowElement);
    }
}

   
function clearPuzzle() {
    while(rowsElement.children.length > 0) {
        rowsElement.removeChild(rowsElement.children[0]);
    }
}