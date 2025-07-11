let score = 0;

function modeChoisi() {
  let prompteurQuestion = prompt("voulez vous écrire des phrases ou des mots ?");
  while (prompteurQuestion !== "mots" && prompteurQuestion !== "phrases") {
    prompteurQuestion = prompt("Choisissez entre des phrases ou des mots !");
  }

  if (prompteurQuestion === "mots") {
    boucleDeJeu(mots);
  } else if (prompteurQuestion === "phrases") {
    boucleDeJeu(phrases);
  }
}

function boucleDeJeu(tableau) {
  let tableauIndex = tableau.length;
  for (let i = 0; i < tableauIndex; i++) {
    let prompteur = prompt("écrivez le mot: " + tableau[i]);

    // en cas de faute
    while (prompteur !== tableau[i]) {
      alert("Mais que se passe t-il ?");
      prompteur = prompt("écrivez le mot: " + tableau[i]);
    }
    score++;
    if (score === tableauIndex) {
      alert(retournerScore(score, tableauIndex));
      break;
    }
  }
}

function retournerScore(score, nombreQuestion) {
  let returnMessageScore = `Vous avez fait un score de ${score} sur ${nombreQuestion}`;
  return returnMessageScore;
}
function launchGame(){
  modeChoisi();
  
}