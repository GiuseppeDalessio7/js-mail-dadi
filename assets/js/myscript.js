/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


// Generare un numero random da 1 a 6

let randomPlayers = Math.floor(Math.random() * 6) + 1;
console.log('Numero giocatore ' + randomPlayers);

let randomPc = Math.floor(Math.random() * 6) + 1;
console.log('Numero pc ' + randomPc);

let win


if (randomPlayers > randomPc) {
    // alert('Ha vinto il giocatore');
    console.log('Ha vinto il giocatore');
    let win = ('Il giocatore')
    let winner = document.getElementById('winner').innerHTML = ('Il vincitore è: ' + win)



} if (randomPlayers < randomPc) {
    // alert('Ha vinto il pc');
    console.log('Ha vinto il pc');
    let win = ('Il Pc')
    let winner = document.getElementById('winner').innerHTML = ('Il vincitore è: ' + win)


} else if (randomPlayers === randomPc) {
    // alert('Pareggio');
    console.log('Pareggio');
    let win = ('Vi è stato un pareggio')
    let winner = document.getElementById('winner').innerHTML = ('Il vincitore è: ' + win)

}

let player = document.getElementById('player').innerHTML = ('Il numero del giocatore è: ' + randomPlayers)
let pc = document.getElementById('pc').innerHTML = ('Il numero del pc è: ' + randomPc)




/* Mail
Chiedi all'utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/

const emailUser = document.getElementById('email');
const validator = document.querySelector("form")
// console.log(emailUser);
const emailList = ['srocco@gmail.com', 'maria2@gmail.com', 'giovanni3@gmail.com', 'carlo7@gmail.com']


for (let i = 0; i < emailList.length; i++) {
    const check = emailList[i];
    console.log(check);
     validator.addEventListener("click", function (e) {
        e.preventDefault();
        const email = emailUser.value
        if (check === emailList) {
            console.log('sei dentro la lista');
        } else {
            console.log('sei fuori dalla lista');
            }
     });

}



