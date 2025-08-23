class Personne {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  capitalize(phraseACapitaliser) {
    const phrase = phraseACapitaliser[0].toUpperCase() + phraseACapitaliser.slice(1);
    return phrase;
  }

  presentation() {
    
    const phrase = this.capitalize(`je m'appelle ${this.nom} ${this.prenom} et j'ai ${this.age} ans`);

    if (isNaN(this.age)) {
      console.log(`Entrez un numéro dans la case age de ${this.prenom}`);
    } else {
      return phrase;
    }
  }

  affichage() {
    console.log(this.presentation());
  }
}

const personnes = [
  new Personne("Dumont", "hervé", "gjgf"),
  new Personne("hiyaa", "Alice", 23),
  new Personne("Dumont", "julien", 33),
];

personnes.forEach((perso) => {
  perso.affichage();
});
