/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


// Generare un numero random da 1 a 6

let randomPlayers = Math.floor(Math.random() * 6) + 1;
console.log('Numero giocatore ' + randomPlayers);

let randomPc = Math.floor(Math.random() * 6 ) + 1;
console.log('Numero pc ' + randomPc);


if (randomPlayers > randomPc ){
    // alert('Ha vinto il giocatore');
    console.log('Ha vinto il giocatore');
    

}if (randomPlayers < randomPc) {
    // alert('Ha vinto il pc');
    console.log('Ha vinto il pc');

}else if (randomPlayers === randomPc){ 
    // alert('Pareggio');
    console.log('Pareggio');
}
    


let player = document.getElementById('player').innerHTML = ('Il numero del giocatore è: ' + randomPlayers)
let pc = document.getElementById('pc').innerHTML = ('Il numero del pc è: ' + randomPc)
// let winner = document.getElementById('winner').innerHTML ('Il vincitore è:' + )
