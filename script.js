
const chars = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
};

generateChars(chars);

const solutionInput = document.getElementById('solution');
const generateButton = document.getElementById('generate');
const printButton = document.getElementById('print');
const downloadButton = document.getElementById('download');

let solution = "";

const config = {
    max: 1000,
    min: 10,
    maxNums: 4,
    canBeNegative: true
}

generateButton.onclick = () => {
    const puzzle = generatePuzzle(solution, chars, config);
    showPuzzle(puzzle);
    printButton.disabled = false;
    downloadButton.disabled = false;
}

solutionInput.oninput = (input) => {
    solution = input.target.value;
    generateButton.disabled = input.target.value.length == 0;
}

printButton.onclick = () => {
    window.print();
}

 
