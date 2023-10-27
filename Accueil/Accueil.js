let prenomRecup = localStorage.getItem('prenom'); // recupération dans le localStorage
document.getElementById("prenom").innerHTML = prenomRecup; // affichage dans le html

let heuresCoRecup = localStorage.getItem('formatHHMMSS');
document.getElementById('affHeures').innerHTML = heuresCoRecup;

let dateCoRecup = localStorage.getItem('formatJJMMAAAA');
document.getElementById('affDate').innerHTML = dateCoRecup