// Creer le monde

let choix1 = 'pierre';
let choix2= 'feuille';
let choix3 = 'ciseau';
//Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.
//.toUpperCase
let choixjoueur = prompt('Entrez: pierre, feuille ou ciseau').toLowerCase();
let ordinateur = Math.random();

const index = Math.floor(Math.random() * 3);

const choix = ['feuille', 'pierre', 'ciseaux'];

let choixOrdinateur = choix[index];

// une solution.
if (ordinateur < (1 / 3)) {
    ordinateur = "pierre";
} else if(ordinateur <= (2 / 3)) {
    ordinateur = "feuille";
} else {
    ordinateur = "ciseau";
}


console.log(ordinateur);
console.log(choixjoueur);




//Si le joueur et l'ordinateur font le même choix on obtient une égalité.
if(choixjoueur === ordinateur) {
    console.log ("égalité!");
}
//Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
if (choixjoueur === choix1 && ordinateur === choix3) {
    console.log("gagné!");
}

if (choixjoueur === choix3 && ordinateur === choix1) {
    console.log("perdu!");
    
}

//La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd)
if (choixjoueur === choix3 && ordinateur === choix2) {
    console.log("gagné!");
}

if (choixjoueur === choix2 && ordinateur === choix3) {
    console.log("perdu!");
}

//La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
if (choixjoueur === choix2 && ordinateur === choix1) {
    console.log("gagné!");
}

if (choixjoueur === choix1 && ordinateur === choix2) {
    console.log("perdu!");
}