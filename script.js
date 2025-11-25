const sketch = document.getElementById("sketch");


for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.className = "row"
    sketch.appendChild(row) 
    for (let j = 0; j < 16; j++) {
        //need to put this inside a flex-box
        const box = document.createElement("div");
        box.className = "box"
        box.textContent = j;

        row.appendChild(box);
    }
}