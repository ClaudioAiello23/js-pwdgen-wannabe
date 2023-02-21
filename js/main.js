// --------------------------------------------------------
// READ ME file JS

// - inserisco l'istruzione JS' "use strict" per poter visualizzare
//  da console Inspector eventuali incongruenze di compilazione JS.

// - inserisci variabili Nome, Cognome, Colore Preferito.

// - inserisci prompt per chiedere all'utente, all'apertura del sito,
//  le variabili precedentemente create

// - lancia il console.log per la stampa del risultato finale.
// -------------------------------------------------------------


'use strict';

// Crea variabili di partenza con valore da inserire a richiesta
const firstName = prompt ('PER FAVORE INSERISCI IL TUO NOME!!!');
const lastName = prompt('NON FARMI ARRABBIARE E INSERISCI IL TUO COGNOME!!!');
const favColor = prompt('SE VUOI SOPRAVVIVERE DIGITA IL TUO COLORE PREFERITO!!!');


// Scrivi il valore della variabile a video nella pagina web,
// in un campo collegato all'id dell'HTML
document.getElementById('first_name').innerHTML= firstName;
document.getElementById('last_name').innerHTML= lastName;
document.getElementById('fav_color').innerHTML= favColor;


// -----------------------------------------------------
// SOLUZIONE A (CONCATENAZIONE VARIABILI) - disattivata
// Crea variabile che concateni le 3 variabili precedentemente 
// inizializzate con l'aggiunta della scritta '89'
// const userPassword = firstName + lastName + favColor + '89';


// Scrivi il valore della nuova variabile password nella pagina web, 
// in un campo collegato all'id dell'HTML
// document.getElementById('user_password').innerHTML= userPassword;


// Stampa sulla console Inspector della pagina web il contenuto della
// variabile userPassword
// console.log(userPassword);


// -----------------------------------------------------
// SOLUZIONE B (INTERPOLAZIONE VARIABILI) - attivata
// Crea variabile che concateni tramite interpolazione le
// 3 variabili precedentemente inizializzate con l'aggiunta della scritta '89'
// e racchiudere tutto con gli apici di tipo backtick (tastierino alt+96)
const userPassword = `${firstName}${lastName}${favColor}89`;


// Scrivi il valore della nuova variabile password nella pagina web, 
// in un campo collegato all'id dell'HTML
document.getElementById('user_password').innerHTML= userPassword;


// Stampa sulla console Inspector della pagina web il contenuto della
// variabile userPassword
console.log(userPassword);






