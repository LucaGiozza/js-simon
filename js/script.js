// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti
//  e quali dei numeri da indovinare sono stati individuati.


 var numeriRandom = []
 for(var i = 0; i < 5 ; i++){
     var casuali = Math.floor(Math.random() * 100) ;
     numeriRandom.push(casuali);
    
 }
 alert(' Attento! Tra poco verranno generati 5 numeri; quando pensi di averli memorizzati premi su ok! Poi partirà un timer di 30 secondi e successivamente dovrai inserire il maggior numero possibile di numeri che ti ricordi! Quando sei pronto premi ok ')
 alert(numeriRandom);


 var tempo = 30;

 var scadenza = setInterval(timer, 1000);

 function timer(){
     if(!tempo){
         clearInterval(scadenza);
         alert('fine timer, adesso tocca a te giocare! Scrivi i numeri che ti ricordi!')
         for(var i = 0; i < 5 ; i++){
             inserimento = parseInt(prompt('Ora inserisci, uno alla volta, tutti i numeri che ti ricordi'))
                 if(scopertaNumero(numeriRandom, inserimento)){
                    alert('bravo hai indovinato almeno un numero')
                     console.log('Numero indovinato')
                 }else{
                     alert('no, questo numero non era presente in lista')
                 }
                
       
                  }
             
        

     }else{
        
         console.log(--tempo + 1) 
        
       
     }
        
    

    
     
 }



 function scopertaNumero(array, numero){
     for(var i = 0; i < array.length; i++){
         if(array[i] == numero){
             return true;
         }

     }
     return false;
 }




// correzione
// così non genera due numeri che si ripetono(con l'if)
// var randomNumbers = [];
// var numeri = 5;
// while(randomNumbers.length < numeri){
//   var numeroRandom = numeriRandom( 1,100);
//   if(!randomNumbers.includes(numeroRandom))
//   randomNumbers.push(numeroRandom);
// }
// console.log(randomNumbers);

// alert(randomNumbers);

// setTimeout(function(){

//   var users = [];
//   for (var i = 0; i < numeri; i++){
//       var numeroUtente = parseInt(prompt('Dimmi un numero'));
//       if(randomNumbers.includes(numeroUtente) && !users.includes(numeroUtente)){
//         //   && users.includes(numeroUtente) per far si che l'utente non possa inserire più volte lo stesso numero
//           users.push(numeroUtente);
//       }
//     //  per sapere quanti numeri ha indovinato
//       if(users.length == 0){
//           console.log('non hai indovinato nessun numero')
//       }else{
//           console.log('hai indovinato + users.length + ' ' numeri e sono : ' + users )
//       }
//   }


// },3000);




// function numeriRandom(min,max){
//     return Math.floor(Math.random() * (max - min + 1 ) + min);
// }

