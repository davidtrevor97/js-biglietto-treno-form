// Informazioni dal cliente
//Nome passeggero
// Fascia eta selezionata dall'utente
// Codice treno CP (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
  // Prezzo calcolato
//Bottone
var bottoneGenera =  document.getElementById("bottoneGenera");
var bottoneAnnulla =  document.getElementById("bottoneAnnulla");

bottoneGenera.addEventListener( "click" , function(){
  console.log("ciaoooo");
  // Informazioni dal cliente
  var nome = document.getElementById("nome").value ;
  var cognome = document.getElementById("cognome").value ;
  var km = document.getElementById("km").value ;
  var eta = document.getElementById("eta").value ;
  //Il prezzo è del 20% - se <18 e 30% - se >65
  var prezzo = (km * 0.21) ;
  if ( ( eta < 18) && (eta > 0) ) {
    prezzo -= prezzo * 0.2;
  }else if ( eta > 64 ) {
    prezzo -= prezzo * 0.3;
  }else if ( ( eta < 1) && ( eta > 130) ){
    alert("ATTENZIONE INSERIRE VALORI ETA' VALIDI");
  }
  //Numeri treno e carrozza casuali
  var cp = Math.floor(Math.random() * (10000 - 9000)) + 9000;
  document.getElementById("cp").innerHTML = cp;

  var carrozza = Math.floor( Math.random() *(10 - 1) ) + 1;
  document.getElementById("carrozza").innerHTML = carrozza;
  
  document.getElementById("prezzo").innerHTML = prezzo + " €";
} )

bottoneAnnulla.addEventListener( "click", function(){
  var nome = document.getElementById("nome").value = "";
  var cognome = document.getElementById("cognome").value = "" ;
  var km = document.getElementById("km").value = "";
  var eta = document.getElementById("eta").value = "";
  document.getElementById("cp").innerHTML = "";
  document.getElementById("carrozza").innerHTML = "";
  document.getElementById("prezzo").innerHTML = "";
})
