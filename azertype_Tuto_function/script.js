const mots = ["pipi", "papa", "popo", "pupu"];
const phrases = [
  "Je suis une baleine",
  "je vole dans le ciel",
  "je suis un pirate",
];
let prompteurQuestion = prompt("voulez vous écrire des phrases ou des mots ?");
let score = 0;

function gameLaunch() {
  while (prompteurQuestion !== "mots" && prompteurQuestion !== "phrases") {
    prompteurQuestion = prompt("Choisissez entre des phrases ou des mots !");
  }

  if (prompteurQuestion === "mots") {
    choixDuMode(mots);
  } else if (prompteurQuestion === "phrases") {
    choixDuMode(phrases);
  }
}

function choixDuMode(tableau) {
  let tableauIndex = tableau.length;
  for (let i = 0; i < tableauIndex; i++) {
    let prompteur = prompt("écrivez le mot: " + tableau[i]);

    while (prompteur !== tableau[i]) {
      alert("Mais que se passe t-il ?");
      prompteur = prompt("écrivez le mot: " + tableau[i]);
    }

    score++;
    alert(`ET ${score} point(s) !`);

    if (score === tableauIndex) {
      +alert(retournerScore(score, tableauIndex));
      break;
    }
  }
}

function retournerScore(score, nombreQuestion) {
  let returnMessageScore = `Vous avez fait un score de ${score} sur ${nombreQuestion}`;
  return returnMessageScore;
}
gameLaunch();
