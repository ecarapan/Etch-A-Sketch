const grid = document.querySelector('#grid');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    grid.appendChild(row);
}

const squares = Array.from(document.querySelectorAll('.square'));
squares.forEach(square => square.addEventListener('mouseenter', handleMouseEnter));
function handleMouseEnter(e) {
    e.target.style.backgroundColor = 'rgb(173, 216, 230)';
}






