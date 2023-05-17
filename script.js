const grid = document.querySelector('#grid');
createGrid(16);

//Button click event listener.
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

    //Square hover event listener.
    document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = `${getRandColor()}`;
    }));
}



function getSize() {
    let size = null;
    while (size <= 0 || size > 100) {
        size = prompt('Enter number of squares per each size of the grid (1 - 100): ');
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

function getRandColor() {
    let hexValues = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues.charAt(Math.floor(Math.random() * 16) + 1);
    }
    return color;
}