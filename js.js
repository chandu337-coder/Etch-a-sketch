let container = document.querySelector("#container");

let n=16;
let btn = document.querySelector("button");
let size = document.querySelector("p");
size.textContent = "Size: 16X16";

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
            grid.addEventListener('mouseenter',()=> {grid.style.backgroundColor = "rgb(91, 28, 105)";});
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
