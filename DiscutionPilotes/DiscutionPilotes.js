let btn = document.getElementById("btnCircuits");
let table = document.getElementById("table");

function clickOpen(){
    table.classList.toggle("test");
}

btn.addEventListener("click", clickOpen)