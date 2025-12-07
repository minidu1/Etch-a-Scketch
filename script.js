function makeTheGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        row.className = "row"
        sketch.appendChild(row) //add the row to sketch. untill it wouldnt work. 

        for (let j = 0; j < gridSize; j++) {
            //need to put this inside a flex-box
            const box = document.createElement("div");
            box.className = "box"
            row.appendChild(box);//add boxes to the row

            box.addEventListener("mousedown", () => startPaint(box))
            box.addEventListener("mouseover", () => paintBox(box));
            // after innerloop end. a new row will be added
        }
    }
}

function startPaint(box) {
    box.classList.add("hover");
    mouseDown = true;
}

function paintBox(box) {
    if (mouseDown) {
        box.classList.add("hover");
    }
}

function clearPaint() {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(box => box.classList.remove("hover"));
}

function clearGrid() {
    const allBoxes = document.querySelectorAll(".box");
    const allRows = document.querySelectorAll(".row");
    allBoxes.forEach(box => box.remove());
    allRows.forEach(row => row.remove());

}

function changeGridSize() {
    let gridSize = Number(window.prompt("Enter the grid size. Please enter a number between 1-100"))
    
    while (isNaN(gridSize) || gridSize>100 ||gridSize <= 0){
        gridSize = Number(window.prompt("Cant you read? Enter a NUMBER BETWEEN 1-100"))
    }
  
    clearGrid();
    makeTheGrid(gridSize);
}

const sketch = document.getElementById("sketch");

makeTheGrid();

// added a var to track if mouse is hold?
let mouseDown = false; // default is mouse is "not clicked"
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;//mpusedown func will true untill mouse up

const reset = document.querySelector(".reset");

reset.addEventListener("click", () => clearPaint())

const changeSizeButton = document.querySelector(".change-size");

changeSizeButton.addEventListener("click", () => changeGridSize());

let rainbowMode = false;

let rainbowButton = document.querySelector(".rainbow");

rainbowButton.addEventListener("click", ()=> toggleRainbowMode());

function toggleRainbowMode() {
    rainbowMode = !rainbowMode
}
 
if (rainbowMode) {
    
}