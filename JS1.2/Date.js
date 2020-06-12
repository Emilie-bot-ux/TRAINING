const aujourdhui = new Date();
const day = aujourdhui.getDay();
// Sunday - Saturday : 0 - 6
// January - December: 0 - 12
console.log(day);

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const months = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];

console.log(months[month], days[day], aujourdhui.getFullYear());