let body = document.querySelector("body");
let promptGame = document.querySelector("#promptGame");
let validate = document.getElementById("validate");
let zonePropostion = document.getElementById("zonePropostion");

let zoneScore = document.querySelector(".zoneScore");

let score = 0;
let i = 0;
promptGame.focus();

let formulaire = document.getElementById('formScore');
let nom = document.getElementById('nom');
let email = document.getElementById('email');

// lance le jeu
function launchGameW() {
  afficherProposition(mots);
  zonePropostion.innerText = mots[i];
  document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === "Enter") {
      let isCorrect = promptGame.value === mots[i];
      if (isCorrect) {
        score++;
      }

      afficherResultat(score, mots);
      promptGame.value = "";
      i++;
      afficherProposition(mots);
    }
  });
  afficherResultat(score, mots);

}

// propose les mots
function afficherProposition(proposition) {
  zonePropostion.innerText = proposition[i];

  if (proposition[i] === undefined) {
    zonePropostion.innerText = "Le jeu est terminé";
    promptGame.disabled = "true";
    formApparition();
  }
}

// affiche le formulaire 
function formApparition(){
  setTimeout(() => {
    formulaire.style.display = "flex";
    console.log("it's ok");
  }, 3000);
}
    
// affiche le résultats
function afficherResultat(score, mots) {
  let affichageScore = document.querySelector(".zoneScore span");
  zoneScore.appendChild(affichageScore);
  affichageScore.innerText = ` ${score} / ${mots.length}`;
}

// gestion formulaire 
function formAppair() {
  formulaire.addEventListener('submit', (event)=>{
    event.preventDefault();
    nom.value = "";
    email.value = "";
    console.log("submited");
  })
}

let motsOuPhrases = document.querySelectorAll('input[name="choix"]');
let typeText= "";

for (let i = 0; i < motsOuPhrases.length; i++) {
    if (motsOuPhrases[i].checked) {
      typeText = motsOuPhrases[i].value
      break
    }  
}

