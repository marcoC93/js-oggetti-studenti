// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore

// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome

// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.


var studenti = [
{
    nome : "Marco" ,
    cognome  : "chianese",
    eta : 27,
},
{
    nome : "Sofia" ,
    cognome : "Perlari",
    eta : 30 ,
},
];

// con questo ciclo vado ad estrarre i dati dei singoli oggetti
for (var key in studenti) {
    console.log(studenti);
    console.log(studenti[key]);
}

// queste variabili andranno a rappresentare i valori che l'utente inserirá per aggiungere i suoi dati all'array degli studenti
var  nome = prompt("inserisci il tuo nome ");
var  cognome = prompt("inserisci il tuo cognome ");
var eta = parseInt(prompt("Quanti anni hai")) ;

var nuovo_studente = {
    nome: nome ,
    cognome : cognome ,
    eta : eta ,
};

console.log(studenti);
studenti.push(nuovo_studente);
console.log(studenti[key]);
