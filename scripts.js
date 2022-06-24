
const container = document.querySelector('#gridContainer');
const btn = document.querySelector('#btn');
btn.addEventListener('click', getSize);

function printSquares(size) {
    for (let i = 0, j = size ** 2; i < j; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => square.classList.add('hover'));
        /* square.addEventListener('mouseout', () => square.classList.remove('hover')); */
        container.appendChild(square);
    }
}

function getSize() {
    let number = parseInt(prompt('Please enter how many squares should fit in the width.'));
    console.log(number);
    if (isNaN(number) || number < 1 || number > 100) {
        alert('Input must be an integer between 1 and 100.')
        return;
    } else {
        printSquares(number);
        return;
    }
}