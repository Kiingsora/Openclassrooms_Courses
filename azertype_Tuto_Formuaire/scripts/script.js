let body = document.querySelector("body");
let input = document.querySelector("input");
let validate = document.getElementById("validate");
let zonePropostion = document.getElementById("zonePropostion");

let formRadio = document.querySelector(".formRadio");

let zoneScore = document.querySelector(".zoneScore");

let score = 0;
let i = 0;
input.focus();

// lance le jeu
function launchGameW() {
  afficherProposition(mots);
  zonePropostion.innerText = mots[i];
  document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key === "Enter") {
      let isCorrect = input.value === mots[i];
      if (isCorrect) {
        score++;
      }
      afficherResultat(score, mots);
      input.value = "";
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
    input.disabled = "true";
  }
}

// affiche le résultats
function afficherResultat(score, mots) {
  let affichageScore = document.querySelector(".zoneScore span");
  zoneScore.appendChild(affichageScore);
  affichageScore.innerText = ` ${score} / ${mots.length}`;
}

for (let i = 0; i < formRadio.length; i++) {
  
}
