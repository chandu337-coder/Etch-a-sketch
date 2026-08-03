let container = document.querySelector("#container");

let n=16;
let btn = document.querySelector(".size");
let size = document.querySelector("p");
size.textContent = "Size: 16X16";

let color = 0;

let s = (960/n);
resize();
function resize(){
    for(let i=0;i<n;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<n;j++){
            const grid = document.createElement("div");
            grid.style.width = grid.style.height = s + "px";
            grid.classList.add("grid");
            grid.addEventListener('mouseenter',()=> {grid.style.backgroundColor = randomColor();});
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

btn.addEventListener('click',()=>{
    n = prompt("Enter number of squares per side(Max 100): ");
    size.textContent = "Size: " + n + "X" + n;
    if(n>100){
        alert("MAX limit exceeded");
        return;
    }
    container.replaceChildren();   
    s = (960/n);
    resize();
});

let random = document.querySelector(".random");

function randomColor(){
    let x = Math.floor(Math.random() * 256)+1;
    let y = Math.floor(Math.random() * 256)+1;
    let z = Math.floor(Math.random() * 256)+1;
    if(color == 0){
        return "rgb(91, 28, 105)";
    }else if(color == -1){
        return "rgb(150, 90, 145)";
    }
    return `rgb(${x},${y},${z})`;
}

random.addEventListener('click',()=>{
    if(color == 1){
        color =0;
    }else{
        color =1;
    }
});

let reset = document.querySelector(".reset");

reset.addEventListener('click',()=>color=-1);