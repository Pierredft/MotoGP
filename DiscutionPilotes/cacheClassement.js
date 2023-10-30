// classement pilote
let bouttonAfficher = document.getElementById("btnCircuits");
let classement = document.getElementById("tableauClassement");

function clickOpen(){
    classement.classList.toggle("afficheTableau");
}

bouttonAfficher.addEventListener("click", clickOpen);
// classement pilote