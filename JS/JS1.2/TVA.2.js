//JS1.2 - Calculatrice de TVA avec remise


//  s'il le souhaite une remise, le résultat TTC s'affiche en HTML.
//    L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
//    La saisie de la remise se fait en pourcentage, un nombre à virgule donc, 
//    et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
//    Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
//    S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"



// -- 1: creer le 'monde'
const TVA = 20.0;

let prixHT = '';

do {
    prixHT = parseFloat(prompt('Entrer un prix HT'));
} while(isNaN(prixHT));


// chercher deux methodes: une qui convertit les caracteres en minuscule
//                            une qui convertit en majuscule
// indice: touppercase, tolowercase
const reduction = prompt('Beneficiez vous d\'une remise ?').toLowerCase();

// si l'utilisateur beneficie d'une remise: Demande le pourcentage de remise.

if(reduction === 'oui'  || reduction === 'yes') {
    
    let remise = '';

    do {
        remise = parseFloat(prompt('Entrer le pourcentage de remise'));
    } while(isNaN(remise));
    
   const montantRemise = (prixHT * remise) / 100;
   prixHT = prixHT - montantRemise;
   document.write('<p>montant de la remise: ' + montantRemise + '&euro;</p>');
} 
// sinon on affichera "Aucune remise n'a été appliquée"
else {
    document.write("Aucune remise n'a été appliquée");
}

// -- 2: le calcul
//          // calcul montant de la TVA
const montantTVA = (prixHT * TVA) / 100;

//          // calcul montant TTC
const prixTTC = (prixHT + montantTVA);

// -- 3: l'affichage
document.write('<b><p>prix TTC: <b>' + prixTTC + "€</p>");
