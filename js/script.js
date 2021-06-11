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


var tempo = 3;

var scadenza = setInterval(timer, 1000);

function timer(){
    if(!tempo){
        clearInterval(scadenza);
        alert('fine timer')
        for(var i = 0; i < 5 ; i++){
            inserimento = parseInt(prompt('Ora inserisci, uno alla volta, tutti i numeri che ti ricordi'))
                
       
                 }
             
        

    }else{
        
        console.log(--tempo + 1) 
        
       
    }
        
    

    
     
}

// function risposta(){
//     for(var i = 0; i < 5 ; i++){
    
       
//     }
// }

// risposta()