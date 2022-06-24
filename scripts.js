
const container = document.querySelector('#gridContainer');
const btn = document.querySelector('#btn');
btn.addEventListener('click', getSize);

// Create the grid given a number of squares
function printSquares(size) {
    for (let i = 0, j = size ** 2; i < j; i++) {
        let square = document.createElement('div');
        square.style.width = `${960 / size}px`;
        square.classList.add('square');
        square.addEventListener('mouseover', () => square.classList.add('hover'));
        /* square.addEventListener('mouseout', () => square.classList.remove('hover')); */
        container.appendChild(square);
    }
}

// Ask the user for input and feed the input into printSquares
function getSize() {
    let number = parseInt(prompt('Please enter how many squares should fit in the width.'));
    console.log(number);
    if (isNaN(number) || number < 1 || number > 100) {
        alert('Input must be an integer between 1 and 100.')
        return;
    } else {
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
        printSquares(number);
        return;
    }
}