let body = document.querySelector("body");
let input = document.querySelector("input");
let validate = document.getElementById("validate");
let zonePropostion = document.getElementById("zonePropostion");

let score = 0;
let i = 0;

function afficherProposition(proposition) {
  zonePropostion.innerText = proposition[i];
  
  if (proposition[i] === undefined) {
    zonePropostion.innerText = "Le jeu est terminé";
    validate.disabled = "true";
    afficherResultat(score, mots);
  }
}

function launchGameW() {
  afficherProposition(mots);
  zonePropostion.innerText = mots[i];
  
  validate.addEventListener("click", () => {
    if (input.value === mots[i]) {
      console.log("point");
      score++
    }

    i++;
    input.value = "";
    afficherProposition(mots);
    // retourne le score finale
  });

}


function afficherResultat(score, mots) {
  let affichageScore = document.createElement("p");
  body.appendChild(affichageScore);
  affichageScore.innerText = `Vous avez fait un score de ${score} sur ${mots.length}`;
}
