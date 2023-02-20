// READ ME

// - inserisco la modalità "use strict" per poter visualizzare
// da console Inspector eventuali incongruenze di compilazione JS.

// - inserisci variabili Nome, Cognome, Colore Preferito.

// - inserisci prompt per chiedere all'utente le variabili
// precedentemente create.

// - lancia il log.console per la stampa del risultato Finale.


'use strict';

// const firstName = prompt ('Digita il tuo nome');
// const lastName = prompt('Digita il tuo cognome');
// const favColor = prompt('Digita il tuo colore preferito');

document.getElementById('first_name').innerHTML= firstName;
document.getElementById('last_name').innerHTML= lastName;
document.getElementById('fav_color').innerHTML= favColor;

const userPassword = firstName + lastName + favColor + '89';

document.getElementById('user_password').innerHTML= userPassword;

console.log(userPassword);




