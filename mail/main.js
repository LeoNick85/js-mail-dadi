//Imposto un array con gli indirizzi autorizzati
var valid_email = ["javierzanetti@gmail.com","lewishamilton@gmail.com","russelwestbrook@gmail.com","andreasbakkerud@gmail.com","lukadoncic@gmail.com","timduncan@gmail.com","ayrtonsenna@gmail.com","youridjorkaeff@gmail.com","tracymcgrady@gmail.com","diegomilito@gmail.com","lebronjames@gmail.com"];
console.log(valid_email);

//Chiedo all'utente di inserire la propria email e pubblico il valore in html
var user_mail = prompt("Inserisci la tua email:");
console.log(user_mail);
document.getElementById("userdata").innerHTML = user_mail;

//Confronto l'email con quelle presenti in valid_email e se corretta metto true a access_granted
var access_granted = false;
for (var i = 0; i < valid_email.length; i++) {
    if (valid_email[i] == user_mail) {
        access_granted = true;
    }
}
console.log(access_granted);

//In base al valore di access_granted metto a schermo messaggio corrispondente
if (access_granted == true) {
    document.getElementById("result").innerHTML = "Accesso consentito";
} else {
    document.getElementById("result").innerHTML = "Accesso non consentito";
    document.getElementById("result").setAttribute("class", "red");
}
