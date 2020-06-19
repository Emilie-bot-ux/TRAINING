
// demander nombre a et b et operateur
let a = parseFloat(prompt('Entrez un nombre'));
let b = parseFloat(prompt('Entrez un deuxieme nombre'));
let operateur = parseFloat(prompt('Entrez un opérateur'));
let result = "";



// gerer la division par zero

// tant que  (nombre2 === 0  et operateur === /) 

if(b === 0 && operateur === '/') {
    do {
        b = parseFloat(prompt('Entrez un nombre different de zero'));
    } while (b === 0 && operateur === '/');    
}

// if( a == 0 || b == 0) {
    
// }



switch(operateur) {
    case '+':
    case 'addition':
        result = a + b;
        break;
    case '-':
    case 'soustraction':
        result = a - b;
        break;
    case '*':
    case 'multiplicaion':
        result = a * b;
        break;
    case '/':
    case 'division':
        result = a / b;
        break;
    case '^':
    case 'puissance':
        result = a ** b;
        break;
    default:
        console.log('l\'operation n\'existe pas.');
        break;
        
}


    
    


// utiliser isNaN et parseFloat();


document.write(result);
