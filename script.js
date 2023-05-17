const grid = document.querySelector('#grid');
createGrid(16);

document.querySelector('.size-button').addEventListener('click', (e) => {
    let size = getSize();
    //Will fail if size is undefined.
    if (size) {
        //Removes all grid squares so that new children can be added.
        while(grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }  
    }
    createGrid(size);
});

document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'rgb(173, 216, 230)';
}));

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    setNewSize(size);
}

function getSize() {
    let size = null;
    while (size <= 0 || size > 64) {
        size = prompt('Enter number of squares per each size of the grid (1 - 64): ');
        if (size === null) break;
    }
    return size;
}

function setNewSize(size) {
    let newSize = `${480 / size}px`;
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.height = newSize;
        square.style.width = newSize;
    });
}

