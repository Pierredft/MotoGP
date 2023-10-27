let nomRecup = localStorage.getItem('nom'); // recupération dans le localStorage
document.getElementById("affReNom").innerHTML = nomRecup;// affichage dans le html

let prenomRecup = localStorage.getItem('prenom'); // recupération dans le localStorage
document.getElementById("affRePrenom").innerHTML = prenomRecup; // affichage dans le html

let mailRecup = localStorage.getItem('mail'); // recupération dans le localStorage
document.getElementById("affReMail").innerHTML = mailRecup; // affichage dans le html

let mdpRecup = localStorage.getItem('password'); // recupération dans le localStorage
document.getElementById("affReMdp").innerHTML = mdpRecup; // affichage dans le html

let CoMailRecup = localStorage.getItem('CoMail');
document.getElementById("affCoMail").innerHTML = CoMailRecup;

let CoMdpRecup = localStorage.getItem('CoPassword');
document.getElementById("affCoMdp").innerHTML = CoMdpRecup;

let heuresCoRecup = localStorage.getItem('formatHHMMSS');
document.getElementById('affHeures').innerHTML = heuresCoRecup;

let dateCoRecup = localStorage.getItem('formatJJMMAAAA');
document.getElementById('affDate').innerHTML = dateCoRecup