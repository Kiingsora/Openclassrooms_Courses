// Niveau 1 exo 1 créer un objet et l'afficher

// Déclaration d'un Objet avec ses propriété
const jedi = {
  nom: "Skywalker",
  prenom: "luke",
  age: 29,
  cote: "obscur",
};

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
jedi.statut = "élu de la force";
console.log(`ajout d'un champ`, jedi);

// suppression du champ (ben oui, il a choisi le côté obscur de la force...)
delete jedi.statut;
console.log(`supression d'un champ`, jedi);

// niveau 4 exo 4 boucler sur chaques propriété/champ de l'objet jedi
for (const propriete in jedi) {
  console.log(`${propriete} : ${jedi[propriete]}`);
}

// niveau 5 exo 5 Méthodes et this
// ajout d'une fonction dans l'objet jedi qui affiche un message de présentation
jedi.sePresenter = function () {
  let message = `Je suis ${this.prenom} ${this.nom}...`;

  // condition selon le côté de la force
  if (this.cote === "obscur") {
    message += "Rejoins le côté obscur de la force";
  }
  if (this.cote === "lumière") {
    message += "Rejoins le côté lumineux de la force";
  }
  console.log(message);
};

// appel de la fonction sePrésenter d l'objet jedi
jedi.sePresenter();
console.log(jedi);

// créer une méthode avec une fonction fléché (la méthode est lié à l'objet donc this n'est pas utilisable dans ce cas)
const droid = {
  nom: "R2D2",
  fonction: "Droïd d'assistance",
  parler: () => {
    let message;
    return (message = `bip bip swiuuu bip swiuuiip`);
  },
};

console.log(droid.parler());

// Niveau 6 exo 6 : on récapitule tout
//
const sorciers = {
  prenom: "Harry",
  nom: "Potter",
  age: 15,
  ecole: "Poudlard",
  sortAppris: ["Expeliarmus", "Wingardium Leviosa", "Protego"],
  maison: "Griffondor",
};

for (const attribut in sorciers) {
  console.log(attribut, sorciers[attribut]);
}
sorciers.afficherProfil = function () {
  let message = `étudiant : ${this.maison}`;
  console.log(message);
};
delete sorciers.age;
console.log(sorciers);

// OBJET IMBRIQUé
const personnageDeJeu = {
  prenom: "sora",
  equipement: {
    arme: "Keyblade",
    armure: "vêtements magique",
  },
  competence: [
    "maniement de la keyblade",
    "Sort magique",
    "invocation",
    "Joie de vivre",
  ],
};

console.log(personnageDeJeu.equipement.arme);
console.log(personnageDeJeu.competence[0]);

const inventaireDuTVA = [
  {
    objet: " Pierre de l'infinité ",
    quantite: 100000000000,
  },
  {
    objet: " Lance toile ",
    quantite: 52004,
  },
  {
    objet: " Surf du Surfer d'argent ",
    quantite: 32,
  },
  {
    objet: " Marteau de thor ",
    quantite: 0,
  },
];

// affiche les objets d'une liste (nécéssite que l'objet contienne 2 objet [nom, quantité])
function listeObjetEtQuantite(liste) {
  for (const objet of liste) {
    let message = `Il y à ${objet.quantite} ${objet.objet}dans les réserves`;
    if (objet.quantite === 0) {
      message = `Il n'y a plus de ${objet.objet}`;
    }
    console.log(message);
  }
}

// calcule de la totalité des objets d'une liste(nécéssite que l'objet contienne 2 objet [nom, quantité])
function totalObjet(liste) {
  const valeurInitiale = 0;
  const nbObjetEnTout = liste.reduce(
    (accumalteur, currentValue) => (accumalteur += currentValue.quantite),
    valeurInitiale
  );
  console.log(nbObjetEnTout);
}

listeObjetEtQuantite(inventaireDuTVA);
totalObjet(inventaireDuTVA);
