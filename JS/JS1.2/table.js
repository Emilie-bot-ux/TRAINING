//Construire une table des multiplications en JavaScript puis l'afficher en HTML.
//Détails

//Demander à l'utilisateur de saisir la taille de la table des multiplications (exemple : si on saisit 10 il faut faire une table de 1 à 10).
//Il faut utiliser les balises HTML de tableaux pour construire l'affichage.
//Pour l'affichage, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.), la cellule du tableau HTML doit s'afficher d'une autre couleur que les autres cellules. La solution doit être en CSS.

//Rappels

  //  Rien de mieux qu'une boucle pour initialiser un tableau...*/

// Creer le monde
// Commencer par afficher un ligne 


// J'ouvre une balise table
document.write('<table>');
//
// initialize une boucle avec le nombre de l'utilisateur
// le nombre va determiner la longueur de la boucle
//  cette boucle sert a generer des balises HTML qui se repetent.
for(let i = 0; i <= number; i++) {
    // si number est egal a 5, je genere 5 <tr></tr>
    document.write('<tr>');
        // Ici je dois genere les <td></td>
        // Le nombre de td est determine par number aussi
        // 
        
    
    document.write('</tr>');
    
}
document.write('</table>');

