// Niveau 1 exo 1
function direBonjour(nom) {
  let date = new Date().getHours();
  let bonjourOuBonsoir = "Bonjour";

  if (date >= 18) {
    bonjourOuBonsoir = "Bonsoir";
  }
  console.log(date);

  return `${bonjourOuBonsoir} ${nom}`;
}
console.log(direBonjour("Hichem"));

// Niveau 1 exo 2
function addition(a, b) {
  let resultat = a + b;
  if (isNaN(a) || isNaN(b)) {
    resultat = console.log("Veuillez entrer un nombre");
  }
  return resultat;
}
console.log(addition(10, 5));

// Niveau 2 exo 3
function remise(prixInitial, remise) {
  let prixAprèsRemise = (prixInitial * remise) / 100;
  const LIMITE_REMISE = 50;

  if (remise >= LIMITE_REMISE) {
    prixAprèsRemise = alert(
      "Frère tu veux pas que je te le donne le produit aussi ?!"
    );
  } else {
    prixAprèsRemise = console.log(
      `Cela vous fais une remise de ${prixAprèsRemise} euro sur ${prixInitial} euro`
    );
  }
  return prixAprèsRemise;
}
remise(840, 49);

// Niveau 3 exo 4
function longueurMotDePasse(motDePasse) {
  return motDePasse.length >= 8;
}

function contientUnChiffre(motDePasseNum) {
  return /[0-9]/.test(motDePasseNum);
}

function alerte(longueur, nombre, valeur) {
  if (!longueur(valeur)) {
    console.log("Entrez un minimum de 8 caractères !");
  } else if (!nombre(valeur)) {
    console.log("Veuillez mettre un chiffre !");
  } else {
    console.log("Mot de passe accepté.");
  }
}

alerte(longueurMotDePasse, contientUnChiffre, "zigzag");
alerte(longueurMotDePasse, contientUnChiffre, "zigzagzig");
alerte(longueurMotDePasse, contientUnChiffre, "zigzagzig21");

// Niveau 4 exo 5
// version switch/case
function calculatrice(chiffre1, chiffre2, operateur) {
  let resultat;
  switch (operateur) {
    case "+":
      resultat = chiffre1 + chiffre2;
      break;
    case "-":
      resultat = chiffre1 - chiffre2;
      break;
    case "x":
      resultat = chiffre1 * chiffre2;
      break;
    case "/":
      resultat = chiffre1 / chiffre2;
      break;
    default:
      resultat = "Veuillez entrer des nombres !";
      break;
  }
  return console.log(resultat);
}

calculatrice(18, 8, "x");

// version callback
/*additionne les nombres entre eux*/
function addition(nombre1, nombre2) {
  return nombre1 + nombre2;
}
/*soustrait les nombres entre eux*/
function soustraction(nombre1, nombre2) {
  return nombre1 - nombre2;
}
/*multiplie les nombres entre eux*/
function multiplication(nombre1, nombre2) {
  return nombre1 * nombre2;
}
/*divise les nombres entre eux*/
function division(nombre1, nombre2) {
  return nombre1 / nombre2;
}
/*donne la puissance d'un nombres*/
function puissance(nombre1, nombre2) {
  return nombre1 ** nombre2;
}
/**/
function calculer(nombre1, nombre2, operation) {
  return operation(nombre1, nombre2);
}

console.log(calculer(10, 5, puissance));

// niveau 5
// exercice 6

let articles = [
  {
    nom: "Samsung Galaxy S24 FE",
    prix: 699,
  },
  {
    nom: "hogward legacy",
    prix: 18.99,
  },
  {
    nom: "Pc Gamer",
    prix: 899,
  },
  {
    nom: "Meta Quest 3",
    prix: 499,
  },
];

const total = articles.reduce((acc, article) => {
  acc += article.prix;
  return acc;
}, 0);

let panier = [
  {
    nom: "Samsung Galaxy S24 FE",
    prix: 699.99,
  },
  {
    nom: "hogward legacy",
    prix: 18.99,
  },
  {
    nom: "Pc Gamer",
    prix: 899.99,
  },
  {
    nom: "Meta Quest 3",
    prix: 499.99,
  },
];

function articleAuPanier(article, panier) {
  panier.push(article);
  return panier;
}

articleAuPanier({ nom: "GTA VI", prix: 89.99 }, panier);
articleAuPanier({ nom: "Clavier Corsair", prix: 100.99 }, panier);
articleAuPanier({ nom: "Souris Corsair", prix: 55.99 }, panier);
console.log(panier);

function calculTotalPanier(panier) {
  const total = panier.reduce((acc, panier) => { acc += panier.prix;return acc;}, 0);
  return total;
}

console.log(calculTotalPanier(panier));

function roundDecimal(nombre, precision){
  var precision = precision || 2;
  var tmp = Math.pow(10, precision);
  return Math.round( nombre*tmp )/tmp;
}


function afficheRecu(panier) {
  let total = calculTotalPanier(panier);
  for (const article of panier) {
    console.log(`ARTICLE : ${article.nom}  PRIX : ${article.prix} Euro`);
  }
  total = console.log(`TOTAL : ${roundDecimal(total, 2)}`);

  return total
}

afficheRecu(panier);
