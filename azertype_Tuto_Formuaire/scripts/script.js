let body = document.querySelector("body");
let promptGame = document.querySelector("#promptGame");
let validate = document.getElementById("validate");
let zonePropostion = document.getElementById("zonePropostion");

let zoneScore = document.querySelector(".zoneScore");

let score = 0;
let i = 0;
promptGame.focus();

let formulaire = document.getElementById("formScore");
let nom = document.getElementById("nom");
let email = document.getElementById("email");

let typeText = "";
let inputMotsOuPhrases = document.querySelectorAll(".radioButton input");
let listeProposition ;

for (let i = 0; i < inputMotsOuPhrases.length; i++) {
  typeText = inputMotsOuPhrases[i].value;
  
  inputMotsOuPhrases[i].addEventListener("change", (event) => {
    let cible = event.target;
    console.log(event.target);

    if (cible.id === "phrases") {
      listeProposition = listePhrases;
      console.log("phrases");
      
    }else{
      listeProposition = listeMots;
      console.log("mots");
    }
  });
}


// lance le jeu
function launchGameW() {

  afficherProposition(listeProposition);
  console.log(listeProposition);
  
  zonePropostion.innerText = listeProposition[i];
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
  afficherResultat(score, listeProposition);
}

// propose les mots
function afficherProposition(proposition) {
  zonePropostion.innerText = proposition[i];

  if (proposition[i] === undefined) {
    zonePropostion.innerText = "Le jeu est terminé";
    promptGame.disabled = "true";
    formApparition();
  }
  return proposition
}

// affiche le formulaire
function formApparition() {
  setTimeout(() => {
    formulaire.style.display = "flex";
    console.log("it's ok");
  }, 3000);
}

// affiche le résultats
function afficherResultat(score, listeMots) {
  let affichageScore = document.querySelector(".zoneScore span");
  zoneScore.appendChild(affichageScore);
  affichageScore.innerText = ` ${score} / ${listeMots.length}`;
}

// gestion formulaire
function formGestion() {
  formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    nom.value = "";
    email.value = "";
  });
}


