// Récupération des données depuis le local storage
const cell2Data = localStorage.getItem("cell2Data");

// Vérification si la donnée existe
if (cell2Data) {
    // Mettre la donnée dans l'élément avec l'ID "sujet"
    document.getElementById("sujet").textContent = cell2Data;
} else {
    // Si la donnée n'existe pas dans le local storage
    console.log("Aucune donnée trouvée dans le local storage pour la clé 'cell2Data'.");
}

// Récupération des éléments
const zoneCommentaireInput = document.getElementById("zoneCommentaire");
const commentaireElement = document.getElementById("commentaire");
const dateElement = document.getElementById("date");  // Ajout de l'élément de date
const btnAjouter = document.getElementById("btnAjouter");
const prenomRecup = localStorage.getItem('prenom'); // recupération prenom dans le localStorage
const nomRecup = localStorage.getItem('nom'); // recupération prenom dans le localStorage

// Fonction pour formater la date en "JJ/MM/AAAA"
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


btnAjouter.addEventListener("click", function () {
    const commentaireText = zoneCommentaireInput.value;

    const date = new Date();
    
    commentaireElement.textContent = commentaireText;

    dateElement.textContent = formatDate(date);

    document.getElementById("nom").textContent = nomRecup;

    document.getElementById("prenom").textContent = prenomRecup;

    zoneCommentaireInput.value = "";

    localStorage.setItem("dernierCommentaire", commentaireText);
    localStorage.setItem("dateDernierCommentaire", formatDate(date));
});

// cacher la zone de commentaire
let bouttonAjouterCommentaire = document.getElementById("AjoutCommentaire");
let commentaire = document.getElementById("cache");
let bouttonAjouter = document.getElementById("btnAjouter")

function clickOpen(){
    commentaire.classList.toggle("affiche");
}

function clickClose(){
    commentaire.classList.remove("affiche");
}

bouttonAjouterCommentaire.addEventListener("click", clickOpen);
bouttonAjouter.addEventListener("click", clickClose);
// cacher la zone de commentaire









