// console.log("Les Objets");
// // les objets
// let persoUN = {
//   nom: "yves",
//   prenom: "lafesse",
//   age: 29,
//   profession: "hypocpampe",
// };

// persoUN.age = 60;
// console.log(persoUN.age);

// persoUN.surnom = "fefesse";

// let professionDuPerso = persoUN.profession;
// console.log(persoUN);

// console.log("ticket de cinéma");

// const ticketdecinéma = {
//   nomFilm: "the mask",
//   numeroSale: 5,
//   prix: 13,
// };

// let filmUn = "smile";

// let phrase =
//   "Bonjour, quel film voulez vous voir ?" +
//   ticketdecinéma.nomFilm +
//   "svp..." +
//   "tres bien, donc un ticket pour " +
//   ticketdecinéma.nomFilm +
//   " en salle " +
//   ticketdecinéma.numeroSale +
//   " ça vous fera " +
//   ticketdecinéma.prix +
//   " euros";

// console.log(phrase);
// //  Les tableaux

// const tableauUn = ["jurassic", "retour vers", "split", "tortue ninja"];
// const nombreDeFilmTableauUn = tableauUn.length;
// // nombre d'élément dans le tableau
// console.log(tableauUn.length);

// // Les méthodes

// console.log("Les Méthodes");

// tableauUn.push("elephant man", "harry potter", filmUn);
// console.log("Nombre : " + nombreDeFilmTableauUn);
// console.log(tableauUn);

// tableauUn.pop();
// console.log("Nombre : " + nombreDeFilmTableauUn);
// tableauUn.pop();

// console.log("tableau un = " + tableauUn);

// // les copie par valeur (copier une valeur de type simple (number; string, booleen)) et par références (rappel du tableau dans une autre variable | on attribue seulement un autre nom au tableau principal ! supprimer 1 impact 2 mais 2 n'impacte pas 1 )

// let tableauDeux = tableauUn;
// tableauUn.pop();
// console.log("tableau deux = " + tableauDeux);

// let tableauTrois = [...tableauUn];

// tableauUn.pop();
// console.log("tableau trois = " + tableauTrois);

// // exo
// let playlist = ["skyfall", "goldfinger", "simple and clean"];

// let totalMorceaux = playlist.length;

// playlist.push("hikari", "Buffy's theme");
// playlist.pop(); //supprime le dernier
// console.log(playlist);

// playlist.unshift("APT"); //ajoute avant le premier index
// console.log(playlist);

// playlist.splice(0, 1, "batmant theme"); //échande la valeur d'un index spécifique (permet de supprimer plusieurs valeur [indexCible, nombre d'indexe, valeur a ajouter])
// console.log(playlist);

// let morceuxDeLaPlaylist = playlist.slice(1, 4); //permet de récupérer des valeurs d'un tableau (dans l'exemple je récupère de l'index 1 à 3)
// console.log(morceuxDeLaPlaylist);

// // les conditions : if/else
// let condition = true;
// if (condition === true) {
//   //peux être == ou != ou < ou > et il peux y avoir plusieurs condition a respecter && (et) || (ou) (! si on met juste une variable c'est comme si on disait tel variable est true )
//   console.log("vrai");
// } else {
//   console.log("faux");
// }

// // ex :

// let mot = "ok";
// if (mot === "ok") {
//   console.log("c'est vrai");
// } else {
//   console.log("faux");
// }

// let bool = false;

// if (bool) {
//   console.log("c'est vrai");
// } else {
//   //else n'est pas obligatoire si tu ne veux pas de deuxième condition
//   console.log("c'est faux");
// }


// // le prompteur
// let prompteur = prompt("ceci est un prompt, veuillez entrer un donnée");
// console.log(prompteur); // affiche la value entrée dans le prompteur

// if (prompteur === mot) {
//   console.log("bravo");
// }else{
//   console.log("vous avez fait une faute de frappe !");

// }

// // les conditions : Switch / case / default
// const motUn = "jean";
// const tableauDeMots = ["pipi", "papa", "popo", "pupu"];

// switch (prompteur) {
//   case tableauDeMots:
//     console.log("bravo");
//     break;
//   case "pipi":
//     console.log("c'est sale");
//     break;
//   case "papa":
//     console.log("c'est moi");
//     break;
//   case "popo":
//     console.log("au toilette !");
//     break;
//   case "pupu":
//     console.log("Je ne suis pas sûr que ses soit correct...");
//     break;
// }

// exemple :
// const tableauDeMots = ["pipi", "papa", "popo", "pupu"];
// const mot = "jean";
// let  prompteur = prompt(
//   "veuillez entrer le mot: " + mot + ", " + tableauDeMots
// );
// let score = 0;

// switch (prompteur) {
//   case tableauDeMots:
//     console.log("bravo");
//     break;
//   case "pipi":
//     console.log("c'est sale");
//     break;
//   case "papa":
//     console.log("c'est moi");
//     break;
//   case "popo":
//     console.log("au toilette !");
//     break;
//   case "pupu":
//     console.log("Je ne suis pas sûr que ses soit correct...");
//     break;
// }


// if (prompteur == tableauDeMots[1]) {
//   score++
//   console.log(score);
  
// } else {
//   console.log(tableauDeMots);
//   console.log("non");
// }

// Les boucles : FOR
// let i = 0;
// for(let i = 0; i < 3; i = i++){
  
  
// };

// Les boucles : WHILE (tant que)

// while (i < 3) {
//   i++
//   console.log(i);
// };

// Les fonctions :

// function nomDeLaFonction (parametre1, papametre2){
//   // ici, le code que contient la fonction
  
//   let resultat =  parametre1 + papametre2 
//   return resultat
// }

// console.log(nomDeLaFonction(1,2));// donne 3 car 1+2 = 3
