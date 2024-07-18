const container=document.querySelector(".container");
let squareInRow=16;
console.log(squareInRow);
function grid(squareInRow){
for(let i=0;i<squareInRow;i++){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j=0;j<squareInRow;j++){
        const square=document.createElement("div")
        square.classList.add("square");
        row.appendChild(square);
        square.addEventListener("mouseenter",() =>{
            const r=Math.floor(Math.random()*255)+1;
            console.log(r);
            const g=Math.floor(Math.random()*255)+1;
            const b=Math.floor(Math.random()*255)+1;
            square.style.backgroundColor=`rgb(${r},${g},${b})`;
        });
    }
}}
grid(squareInRow);

function createNewGrid(){
    const squarePerSide=() =>{
        const dimension=+prompt("Enter the number of squares per side for New Grid(max=100)",16);
        // console.log(dimension);
        if(dimension>100 || dimension<1 || isNaN(dimension)){
            alert("Please enter valid input within range");
            dimension=16;
        }
        return dimension;
    };

    squareInRow=squarePerSide(); //Call the function with *()*
    container.innerHTML=""; //Clears previous grid
    grid(squareInRow);
};

const newGrid=document.querySelector(".newGrid");
newGrid.addEventListener("click",() =>{
    createNewGrid();
});