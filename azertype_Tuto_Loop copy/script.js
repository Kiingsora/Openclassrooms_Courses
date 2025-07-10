const mots = ["pipi", "papa", "popo", "pupu"];
const phrases = [
  "Je suis une baleine",
  "je vole dans le ciel",
  "je suis un pirate",
];

let prompteurQuestion = prompt("Voulez vous écrire des phrases ou des mots ?");
let score = 0;

  
while (prompteurQuestion !== "mots" && prompteurQuestion !== "phrases") {
  prompteurQuestion = prompt("Choisissez entre des phrases ou des mots !");
}

if (prompteurQuestion === "mots") {
  for (let i = 0; i < mots.length; i++) {
    let prompteur = prompt("écrivez le mot: " + mots[i]);
    while (prompteur !== mots[i]) {
      alert("Mais que se passe t-il ?");
      prompteur = prompt("écrivez le mot: " + mots[i]);
    }
    score++;
    alert(`ET ${score} point(s) !`);
    if (score === 4) {
      alert(`Bravo, vous avez fait un score de ${score} point(s) !`);
      break;
    }     
    console.log(score);
  }
} else if (prompteurQuestion === "phrases") {
  for (let i = 0; i < phrases.length; i++) {
    prompteur = prompt("écrivez la phrase: " + phrases[i]);
    while (prompteur !== phrases[i]) {
      alert("Mais qu'est ce qui se passe ?!");
      prompteur = prompt("écrivez la phrase: " + phrases[i]);
    }
    score++;
    alert(`ET ${score} point(s) !`);
    if (score === 4) {
      alert(`Bravo, vous avez fait un score de ${score} point(s) !`);
      break;
    }
    console.log(score);
  }
}

