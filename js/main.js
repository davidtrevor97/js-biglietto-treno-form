// Informazioni dal cliente
//Nome passeggero
// Fascia eta selezionata dall'utente
// Codice treno CP (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
var nome = document.getElementById("nome").value ;
var cognome = document.getElementById("cognome").value ;
var km = document.getElementById("km").value;
var eta = document.getElementById("eta").value ;
//Bottone
var 
//Numeri treno e carrozza casuali
var cp = Math.floor(Math.random( 10000 - 9000 ) * 9000);
document.getElementById("cp").innerHTML = cp;

var carrozza = Math.floor( Math.random( 10 - 1) * 11 );
document.getElementById("carrozza").innerHTML = carrozza;
//Il prezzo è del 20% - se <18 e 30% - se >65
var prezzo = (km * 0.21) + " €";
document.getElementById("prezzo").innerHTML = prezzo;
