let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];
let listeDeCoursesCopie = ['copie', 'oranges', 'citrons', 'savon', 'eau de javel'];

// Afficher la taille et le contenu de la liste
function afficherLaTailleDeLaListe() {
    return listeDeCourses.length;
}

document.write(afficherLaTailleDeLaListe());


function afficheLaListeDeCourses(liste) {
    document.write('<ul>');
    
    for(let produit of liste) {
        document.write(`<li>${produit}</li>`);
    }    
    
    document.write('</ul>');
    
}

afficheLaListeDeCourses(listeDeCourses);

afficheLaListeDeCourses(listeDeCoursesCopie);
