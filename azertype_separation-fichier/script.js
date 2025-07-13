// // en cas de faute
// function faute() {
//   while (prompteur !== phrases[i]) {
//     alert("Mais que se passe t-il ?");
//     prompteur = prompt("écrivez le mot: " + phrases[i]);
//   }
// }

// récupère la valeur de l'entrée user
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
  alert("Vous avez fait un score de " + score + " sur " + nbElementtableau);
}

// lance le jeu
function launchGame() {
  let choix = modeChoisi();
  let score = 0;
  let nombreMotsOuPhrases = 0;

  if (choix === "mots") {
    score = boucleDeJeu(mots);
    nombreMotsOuPhrases = mots.length;
    console.log(score);
  } else {
    score = boucleDeJeu(phrases);
    nombreMotsOuPhrases = phrases.length;
  }
  afficherResultat(score, nombreMotsOuPhrases);
}

launchGame();
