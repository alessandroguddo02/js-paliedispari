/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
"use strict"
console.clear();

let userWord = prompt("inserisci una parola");
console.log(userWord)

// palidroma(userWord);
palidroma("parola");
palidroma("osso");


function palidroma(word) {
    let verified;
    let reversedword = "";

    // parola == alorap FALSE
    // osso == osso TRUE

    for (let i = word.length - 1; i >= 0; i--) {
        // osso
        // 3210
        console.log(word[i]);

        reversedword += word[i];
        // reversedword = reversedword + word[i];
    }

    console.log(reversedword);

    if (reversedword === word) {
        // si e' palindroma
        verified = true;
    } else {
        // no non e' palindroma
        verified = false;
    }

    console.log(verified);

    return verified;
}

if (palidroma(userWord)) {
    alert('Si e palindroma: ' + userWord);
} else {
    alert('No non e palindroma: ' + userWord);
}






/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/











/**
 * Controlla se la parola e' palindroma
 * 
 * @param {string} word La parola da controllare
 * 
 * @return {boolean} true se palindroma, false viceversa
 */
function palidroma(word) {
    let verified;
    let reversedword = "";

    // parola == alorap FALSE
    // osso == osso TRUE

    for (let i = word.length - 1; i >= 0; i--) {
        // osso
        // 3210
        console.log(word[i]);

        // o
        // s
        // s
        // o

        // -------------------

        // parola
        // a 5
        reversedword += word[i];
        // reversedword = reversedword + word[i];
        // l 4
        // o 3
        // r 2
        // a 1
        // p 0
    }

    console.log(reversedword);

    if (reversedword === word) {
        // si e' palindroma
        verified = true;
    } else {
        // no non e' palindroma
        verified = false;
    }

    console.log(verified);

    return verified;
}