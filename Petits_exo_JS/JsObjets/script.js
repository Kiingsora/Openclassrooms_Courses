// Niveau 1 exo 1 créer un objet et l'afficher

// Déclaration d'un Objet avec ses propriété
const jedi = {
  nom : "Skywalker",
  prenom: "luke",
  age:29
}
// affichage des propriété de l'objet
console.log(jedi.prenom, jedi.nom, jedi.age);
// affichage de l'objet
console.log(jedi);


// Niveau 2 exo 2 changer et ajouter un objet
jedi.prenom = "anakin";
jedi.couleurDeSabre = "rouge";

console.log(jedi);

// niveau 3 exo 3 ajouter et supprimer une propriété/champ

// ajout d'un champ 
jedi.statut = "élu de la force"
console.log(`ajout d'un champ`,jedi);

// suppression du champ (ben oui, il a choisi le côté obscur de la force...)
delete jedi.statut
console.log(`supression d'un champ`, jedi);

// niveau 4 exo 4 boucler sur chaques propriété/champ de l'objet jedi

// boucler sur chaques propriété/champ de l'objet jedi
for (const propriete in jedi) {
  console.log(`${propriete} : ${jedi[propriete]}`);
}

// niveau 5 exo 5 Méthodes et this

// ajout d'une fonction dans l'objet jedi qui affiche un message de présentation
jedi.sePresenter = function(){
  console.log(`Je m'appelle ${this.prenom} ${this.nom}...Rejoins le côté obscur de la force`);
}
// appel de la fonction sePrésenter d l'objet jedi
jedi.sePresenter();
