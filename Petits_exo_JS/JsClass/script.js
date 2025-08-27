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
    const phrase = `je m'appelle ${this.toCapitalizeAndVerificationTrimOrEmptyValue(this.nom)} ${this.toCapitalizeAndVerificationTrimOrEmptyValue(this.prenom)}, j'ai ${this.age} ans`;
    return phrase
  }
}
const malik = new Personne("malik", "elif", 28);
























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
