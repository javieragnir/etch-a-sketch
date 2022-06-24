

const container = document.querySelector('#gridContainer')

console.log(container);

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => square.classList.add('hover'));
    square.addEventListener('mouseout', () => square.classList.remove('hover'));
    container.appendChild(square);
}