const sketch = document.getElementById("sketch");

// added a var to track if mouse is hold?
let mouseDown = false; // default is mouse is "not clicked"
document.body.onmousedown = ()=> mouseDown = true; 
document.body.onmouseup = ()=> mouseDown= false;//mpusedown func will true untill mouse up
console.log( mouseDown)
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div")
    row.className = "row"
    sketch.appendChild(row) //add the row to sketch. untill it wouldnt work. 

    for (let j = 0; j < 16; j++) {
        //need to put this inside a flex-box
        const box = document.createElement("div");
        box.className = "box"
        row.appendChild(box);//add boxes to the row

        box.addEventListener("mouseover", ()=>{
        if (mouseDown) {
            box.classList.add("hover");
        }
    });// after innerloop end. a new row will be added
    }
}

