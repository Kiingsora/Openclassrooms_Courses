// récupère la valeur de l'entrée user
let body = document.querySelector("body");
let input = document.querySelector("input");
let validate = document.getElementById("validate");

let zonePropostion = document.getElementById("zonePropostion");

let i = 0;

function afficherPosition(phrase){
  console.log(phrase);
}

validate.addEventListener("click", ()=>{
  afficherPosition(phrases[i])
  console.log(phrases[i], i);
  i++
});

// retourne le score finale
function afficherResultat(score, nbElementtableau) {
  let affichageScore = document.createElement('p');
  body.appendChild(affichageScore)
  affichageScore.innerText = `Vous avez fait un score de ${score} sur ${nbElementtableau}`
}

function launchGameW() {
  let score = 0;
  let nombreMotsOuPhrases = 0;

  afficherResultat(score, nombreMotsOuPhrases);
}