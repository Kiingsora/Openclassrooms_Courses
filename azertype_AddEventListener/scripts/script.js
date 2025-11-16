// récupère la valeur de l'entrée user
let body = document.querySelector("body");
let promptor = document.querySelector("input")

function modeChoisi() {
  let modeDeJeu = prompt("voulez vous écrire des phrases ou des mots ?");
  while (modeDeJeu !== "mots" && modeDeJeu !== "phrases") {
    modeDeJeu = prompt("Choisissez entre des phrases ou des mots !");
  }
  return modeDeJeu;
}

function boucleDeJeu(listeSelectioner) {
  let score = 0;
  for (let i = 0; i < listeSelectioner.length; i++) {
    valuePrompt = prompt("écrivez : " + listeSelectioner[i]);
    if (valuePrompt === listeSelectioner[i]) {
      score++;
    }
  }
  return score;
}

// retourne le score finale
function afficherResultat(score, nbElementtableau) {
  let affichageScore = document.createElement('p');
  body.appendChild(affichageScore)
  affichageScore.innerText = `Vous avez fait un score  de ${score}  sur  ${nbElementtableau}`
}

function launchGame() {
  let choix = modeChoisi();
  let score = 0;
  let nombreMotsOuPhrases = 0;

  if (choix === "mots") {
    score = boucleDeJeu(mots);
    nombreMotsOuPhrases = mots.length;
  } else {
    score = boucleDeJeu(phrases);
    nombreMotsOuPhrases = phrases.length;
  }
  afficherResultat(score, nombreMotsOuPhrases);
}
