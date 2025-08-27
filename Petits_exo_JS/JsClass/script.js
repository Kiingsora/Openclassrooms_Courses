class Personne {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  toCapitalizeAndVerificationTrimOrEmptyValue(mot){
    if (typeof mot !== "string") {
      return ""
    }
    mot = mot.trim();
    if (mot === "") {
      return ""
    }
    return mot[0].toUpperCase() + mot.slice(1); 
  }
  presentation() {
    const phrase = this.toCapitalizeAndVerificationTrimOrEmptyValue(`je m'appelle ${this.toCapitalizeAndVerificationTrimOrEmptyValue(this.nom)} ${this.toCapitalizeAndVerificationTrimOrEmptyValue(this.prenom)}, j'ai ${this.age} ans`);
    return phrase
  }
}

// créer une nouvelle instance
const malik = new Personne("elif", "malik", 28);
// créer un objet vide qui emprunte les méthodes quand il a besoin
const ahmed = Object.create(malik)
ahmed.prenom = "ahmed";
// test de la méthode présentation
ahmed.presentation()
// créer une instance karen a partir de malik et valeur direct dans le constructeur 
const karen = new malik.constructor("karen", 'matu', 85)
// vérification 
console.log(ahmed.presentation()); // renvoi la classe personne
console.log(malik.constructor.name); // renvoi le nom de la classe
console.log(karen.age); //affiche l'age de l'instance de karen
























  // capitalize(phraseACapitaliser) {
  //   const phrase =
  //     phraseACapitaliser[0].toUpperCase() + phraseACapitaliser.slice(1);
  //   return phrase.trim();
  // }

//   presentation() {
//     const phrase = this.capitalize(
//       `je m'appelle ${this.nom} ${this.prenom} et j'ai ${this.age} ans`
//     );
//     if (
//       isNaN(this.age) ||
//       typeof this.nom !== "string" ||
//       typeof this.prenom !== "string" ||
//       this.nom === "" ||
//       this.prenom === "" ||
//       this.age === "" 
//     ) {
//       console.log(
//         `Entrez du texte dans les cases nom et prénom et un chiffre pour la case age`
//       );
//       return;
//     } else {
//       return phrase;
//     }
//   }

//   affichage() {
//     console.log(this.presentation());
//   }
// }

// const personnes = [
//   new Personne("Dumont", "hervé", 33),
//   new Personne(54651, "", 66),
//   new Personne("Dumont", "julien", 33),
// ];

// personnes.forEach((perso) => {
//   perso.affichage();
// });
