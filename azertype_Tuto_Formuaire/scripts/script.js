let body = document.querySelector("body");
let promptGame = document.querySelector("#promptGame");
let validate = document.getElementById("validate");
let zonePropostion = document.getElementById("zonePropostion");

let zoneScore = document.querySelector(".zoneScore");

let score = 0;
let i = 0;

let formulaire = document.getElementById("formScore");
let nom = document.getElementById("nom");
let email = document.getElementById("email");

let typeText = "";
let inputMotsOuPhrases = document.querySelectorAll(".radioButton input");

let listeProposition;

// lance le jeu
function launchGameW() {
  choixDuMode();
  
  document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === "Enter") {
      let isCorrect = promptGame.value === listeProposition[i];
      if (isCorrect) {
        score++;
      }
      afficherResultat(score, listeProposition);
      promptGame.value = "";
      i++;
      afficherProposition(listeProposition);
    }
  });
}

//  selection du mode
function choixDuMode() {
  inputMotsOuPhrases[0].checked = false;
  inputMotsOuPhrases[1].checked = false;

  for (let i = 0; i < inputMotsOuPhrases.length; i++) {
    typeText = inputMotsOuPhrases[i].value;
    
    inputMotsOuPhrases[i].addEventListener("change", (event) => {
      let cible = event.target;
      if (cible.id === "mots") {
        listeProposition = listeMots;
      } else {
        listeProposition = listePhrases;
      }
      promptGame.disabled = false;
      promptGame.focus();
      afficherProposition(listeProposition);
    });
  }
}

// propose les mots
function afficherProposition(proposition) {
  zonePropostion.innerText = proposition[i];

  if (proposition[i] === undefined) {
    zonePropostion.innerText = "Le jeu est terminé";
    promptGame.disabled = "true";
    formApparition();
  }
  return proposition;
}

// affiche le résultats
function afficherResultat(score, listeProposition) {
  let affichageScore = document.querySelector(".zoneScore span");
  zoneScore.appendChild(affichageScore);
  affichageScore.innerText = ` ${score} / ${listeProposition.length}`;
  console.log(listeProposition);
}

// affiche le formulaire
function formApparition() {
  setTimeout(() => {
    formulaire.style.display = "flex";
    console.log("it's ok");
  }, 3000);
}

// gestion formulaire
function formGestion() {
  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    nom.value = "";
    email.value = "";
  });
}
