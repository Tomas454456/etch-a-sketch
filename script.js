const container = document.querySelector("#container")

function createGrid(num)
{
    const size = num **2;
    const divSize = 700/ num

    calc = (divSize * 100)/700;

    for(let i = 0;i < size;i++){
        const div = document.createElement("div");
        div.className = "grid_item";
        div.style.flexBasis = `${calc}%`
        div.style.height = `${calc}%`
        div.style.backgroundColor = "transparent";
        div.style.opacity = 0.1
        container.appendChild(div)
    }
}
function generateRandomColor(){
    let ran = Math.floor((Math.random() * 256));
    return ran;
}

document.addEventListener("mouseover",(e)=>{
    if(e.target.className === "grid_item"){
        if (e.target.style.backgroundColor === "transparent"){
            const red = generateRandomColor();
            const green = generateRandomColor();
            const blue = generateRandomColor();

            e.target.style.backgroundColor = `rgb(${red},${green},${blue})`
        }else{
            const opacity = parseFloat(e.target.style.opacity)
            e.target.style.opacity = Math.min(opacity + 0.1, 1);
        }
    }
});

createGrid(16);

document.addEventListener("click", (e)=>{

    function clean(){
        let grids = document.querySelectorAll(".grid_item");
        
        grids.forEach(element => {
            element.remove(element)
        });
    }
    if(e.target.className === "clear"){
        let grids = document.querySelectorAll(".grid_item");
        
        grids.forEach(element => {
         
            element.style.backgroundColor = "transparent";
            element.style.opacity = 0.2;
           
        });
        
    }
    if(e.target.className=== "resize"){
        dim = parseInt(prompt("Set the new grid size (min: 1, max: 100)"));
        if(dim > 0 && dim <= 100){
            clean();
            createGrid(dim);
        }else{
            alert("No valid (1-100)")
        }
    }
})