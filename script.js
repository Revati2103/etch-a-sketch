const colorPicker = document.getElementById('color-picker');
const gridSize = document.getElementById('grid-size');
let size = gridSize.value;
const resetButton = document.querySelector('.reset');
const container = document.querySelector('.container');

let isDrawing = false;

function etchASketch(size){
container.style.setProperty('--size', size);

for(let i = 0; i< size*size ; i++){
    const div = document.createElement('div');
    div.classList.add('pixel');

    div.addEventListener('mouseover', function(){
        if(!isDrawing) return;
        div.style.backgroundColor = colorPicker.value;

    })

    div.addEventListener('mousedown', function (){
        div.style.backgroundColor = colorPicker.value;
    })

    container.appendChild(div);
}
}

window.addEventListener("mousedown", function(){
    isDrawing = true;
})

window.addEventListener("mouseup", function(){
    isDrawing = false;
})

function reset(){
    container.innerHTML = "";
    etchASketch(size);
}

resetButton.addEventListener('click', reset);

gridSize.addEventListener('keyup', function(){
    size = gridSize.value;
    reset();
})

etchASketch(size);