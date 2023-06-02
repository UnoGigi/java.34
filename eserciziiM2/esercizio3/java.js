//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

let numero1 = 4
let numero2 = 6

if (numero1>numero2) {
    console.log("numero1 maggriore", numero1);
} else { 
    console.log("numero2 maggiore", numero2);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num = 4

if (num<5) {
    console.log("tiny");
} else if (num<10) {
    console.log("small");
} else if (num <15) {
    console.log("medium");
} else if (num<20) {
    console.log("large");
} else if (num>=20) {
    console.log("huge");
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA 


for (let i = 0; i <= 10; i++) {
    if (i ===3 || i===8) {
        continue
    }
    console.log(i);
} 

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

for (let e = 0; e <= 15; e++) {
    if (e%2===0) {
        console.log(e,"è pari");
    } else {console.log(e, "è dispari");}
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let a = 12
let b = 5

if (a === 8 || b === 8 || a+b === 8 || a-b === 8 || b-a === 8) {
    console.log(true);
} else {
    console.log(false);
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 55
let spedizione = 10

if (totalShoppingCart < 50) {
    console.log("spedizione 10 euro", totalShoppingCart+spedizione);
} else {
    console.log("spedizione gratuita", totalShoppingCart);
} */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let totalShoppingCart = 67
let spedizione = 10
let sconto = (totalShoppingCart*20) /100

if (totalShoppingCart-sconto < 50) {
    console.log("spedizione 10 euro", totalShoppingCart-sconto+spedizione );
} else {
    console.log("spedizione gratuita")
}  


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let gender = "male" 
let isMale = gender ? "male" : "female" 




/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 0; i<=100; i++) {
    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz");
        continue
    } else if (i%3===0) {
        console.log("Fizz");
        continue 
    } else if (i%5===0) {
        console.log("Buzz");
        continue
    } 
    console.log(i);
}