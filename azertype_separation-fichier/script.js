const mots = ["papa", "popo", "pupu"];
const phrases = [
  "Je suis une baleine",
  "je vole dans le ciel",
  "je suis un pirate",
];
let prompteurQuestion = prompt(`voulez vous écrire des phrases ou des mots ?`);

let score = 0;


function motsOuPhrases(tableau) {
  let tableauIndex = tableau;
  for (let i = 0; i < tableauIndex; i++) {
    let prompteur = prompt("écrivez le mot: " + tableau[i]);

    while (prompteur !== tableau[i]) {
      alert("Mais que se passe t-il ?");
      prompteur = prompt("écrivez le mot: " + tableau[i]);
    }

    score++;
    alert(`ET ${score} point(s) !`);

    if (score === tableauIndex) {
      alert(retournerScore(score, tableauIndex));
      break;
    }
  }
}

function gameLaunch(modeChoisi) {
  console.log(prompteurQuestion);
  
  let motsOuPhrase;
  while (prompteurQuestion !== "mots" && prompteurQuestion !== "phrases") {
    prompteurQuestion = prompt("Choisissez entre des phrases ou des mots !");
  }

  if (prompteurQuestion === "mots") {
    motsOuPhrase = motsOuPhrases(modeChoisi);
  } else if (prompteurQuestion === "phrases") {
    motsOuPhrase = motsOuPhrases(modeChoisi);
  }
}

function retournerScore(score, nombreQuestion) {
  let returnMessageScore = `Vous avez fait un score de ${score} sur ${nombreQuestion}`;
  return returnMessageScore;
}
gameLaunch(prompteurQuestion)