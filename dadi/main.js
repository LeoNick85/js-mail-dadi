//Chiedo ai giocatori di inserire i loro nomi e li aggiorno nell'html
var giocatore1 = prompt("Inserisci il nome del giocatore 1:");
var giocatore2 = prompt("Inserisci il nome del giocatore 2:");

document.getElementById('giocatore1').innerHTML = giocatore1;
document.getElementById('giocatore2').innerHTML = giocatore2;

//Faccio il lancio di dadi per entrambi i giocatori e lo aggiorno in HTML
var result1 = Math.ceil((Math.random() * 6));
console.log(result1);
var result2 = Math.ceil((Math.random() * 6));
console.log(result2);

document.getElementById('result1').innerHTML = result1;
document.getElementById('result2').innerHTML = result2;

//Confronto i risultati e dichiaro il vincitore
if (result1 > result2 ) {
    document.getElementById('winner').innerHTML = "Il giocatore 1 (" + giocatore1 + ") ha vinto la partita!";
} else if (result1 < result2 ) {
    document.getElementById('winner').innerHTML = "Il giocatore 2 (" + giocatore2 + ") ha vinto la partita!";
} else {
    document.getElementById('winner').innerHTML = "La partita si è conclusa in parità";
}
