document.getElementById("add-button").addEventListener("click", function() {
    const topicInput = document.getElementById("topic-input").value;
    if (topicInput) {
        const tableBody = document.getElementById("table-body");
        const rowCount = tableBody.getElementsByTagName("tr").length;
        const newRow = tableBody.insertRow(rowCount);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        cell1.innerHTML = rowCount + 1;
        cell2.innerHTML = `<a href="../CommentairePilote/commentairePilote.html">${topicInput}</a>`;
        cell3.innerHTML = dateCom;
        cell4.innerHTML = prenomRecup;

        // Recupération des donnéer de la cellule "sujet" et envoie dans le local storage
        localStorage.setItem("cell2Data", topicInput);
    }
});




let btnAjoutSujet = document.getElementById("add-topic");
let btnAjouter = document.getElementById("add-button")
let nouveauSujet = document.getElementById("zoneAjouter");

function clickOpen(){
    nouveauSujet.classList.toggle("zoneAjouterAfficher");
}

function clickClose(){
    nouveauSujet.classList.remove("zoneAjouterAfficher");
}

btnAjoutSujet.addEventListener("click", clickOpen);
btnAjouter.addEventListener("click", clickClose);

let prenomRecup = localStorage.getItem('prenom'); // recupération dans le localStorage
let dateCom = localStorage.setItem("dateDernierCommentaire", formatDate(date));

 // envoie du sujet dans le localStorage