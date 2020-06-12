const TAUX_DE_TVA = 20.0;

const prixHT = parseFloat(prompt ('Quel est le montant HT?'));

console.log(prixHT);

const montantTVA = (prixHT * TAUX_DE_TVA) / 100;

const montantTTC = prixHT + montantTVA;


document.write(montantTTC);
