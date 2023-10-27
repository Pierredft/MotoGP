const CoEmailEl = document.querySelector('#CoEmail');
const CoPasswordEl = document.querySelector('#CoPassword');
const form = document.querySelector('#signup');

//constante pour vérifier si le champ est vide ou non
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const isEmailValid = (CoEmail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(CoEmail);
};

const isPasswordSecure = (CoPassword) => {
    const re = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#\+\-\^\[\]])[A-Za-z\d#\+\-\^\[\]]{8,}$/
);
    return re.test(CoPassword);
};

const showError = (input, message) => {
    //reprendre le form-field element
    const formField = input.parentElement;
    //ajouter la class error et supprimer la class success
    formField.classList.remove('success');
    formField.classList.add('error');

    //afficher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    //reprendre le form-field element
    const formField = input.parentElement;

    //ajouter la class success et supprimer la class error
    formField.classList.remove('error');
    formField.classList.add('success');

    //cacher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
};

//validation de l'e-mail
const checkEmail = () => {
    let valid = false;
    const CoEmail = CoEmailEl.value.trim();
    if (!isRequired(CoEmail)) {
        showError(CoEmailEl, 'le champ ne peut être vide');
    } else if (!isEmailValid(CoEmail)) {
        showError(CoEmailEl, "l'adresse mail ne être valide")
    } else if (CoEmail !== mailRecup) {
        showError(CoEmailEl, "l'adresse mail ne correspond pas avec celle renseigner lors de votre inscription")
    } else {
        showSuccess(CoEmailEl);
        valid = true;
    }
    
    return valid;
};



//validation du mot de passe
const checkPassword = () => {
    let valid = false;
    const CoPassword = CoPasswordEl.value.trim();
    if (!isRequired(CoPassword)) {
        showError(CoPasswordEl, 'le mot de passe ne peut être vide');
    } else if (!isPasswordSecure(CoPassword)) {
        showError(CoPasswordEl, 'le mot de passe doit avoir au moins 8 caractères, il doit comporter une minuscule, une majuscule, un chiffre et un caractère spécial parmis les suivants (#+-^[])');
    } else if (CoPassword !== mdpRecup) {
        showError(CoPasswordEl, 'le mot de passe ne correspond pas avec celui renseigner lors de votre inscription')
    } else {
        showSuccess(CoPasswordEl);
        valid = true
    }
    return valid;
};

form.addEventListener('submit', function (e) {

    //validation des champs
    let isCoEmailValid = checkEmail();
    let isCoPasswordValid = checkPassword();

    let isFormValid = isCoEmailValid &&
        isCoPasswordValid;


    // Soumettre le formulaire
    if (isFormValid == false) {
        e.preventDefault();
        alert("L'envoie a échoué")
    } else {
        alert("Bravo l'envoie du formulaire a été effectué")
    };

    let CoMailVal = document.getElementById("CoEmail").value;
    let CoMdpVal = document.getElementById("CoPassword").value;

        //envoie dans le localStorage
        localStorage.setItem("CoMail", CoMailVal);
        localStorage.setItem("CoPassword", CoMdpVal);
});

// recupération du mail et du mdp de register
let mailRecup = localStorage.getItem('mail'); // recupération dans le localStorage
let mdpRecup = localStorage.getItem('password'); // recupération dans le localStorage

// date
let dateCo = new Date();
console.log(dateCo);
let joursCo = dateCo.getDate();
console.log(joursCo);
let moisCo = dateCo.getMonth()+1;
let anneeCo = dateCo.getFullYear();
console.log(anneeCo);
console.log(moisCo);
let heuresCo = dateCo.getHours();
console.log(heuresCo);
let minutesCo = dateCo.getMinutes();
console.log(minutesCo);
let secondesCo = dateCo.getSeconds();
console.log(secondesCo);

let formatHeure = heuresCo.toString().padStart(2,'0');
let formatMinutes = minutesCo.toString().padStart(2,'0');
let formatSecondes = secondesCo.toString().padStart(2,'0');
let formatHHMMSS= formatHeure + ":" + formatMinutes + ":" + formatSecondes;

let formatJours = joursCo.toString().padStart(2,'0');
let formatMois = moisCo.toString().padStart(2, '0');
let formatAnnee = anneeCo.toString().padStart(2, '0');
let formatJJMMAAAA= formatJours + "/" + formatMois + "/" + formatAnnee;
console.log(formatJJMMAAAA);

localStorage.setItem("formatHHMMSS", formatHHMMSS);
localStorage.setItem("formatJJMMAAAA",formatJJMMAAAA)