let temperatura = prompt('inserisci la temperatura');

if(temperatura > 0 && temperatura < 20){
    console.log('non ci sono piu le mezze stagioni');
}if(temperatura >= 30){
    console.log('lu mare, lu sole, lu ientu');
}if(temperatura > 20 && temperatura < 30){
    console.log('mi dia una peroni sudata');
}if(temperatura > -10 && temperatura< 0){
    console.log('non e’ tanto il freddo quanto l’umidità');
}if(temperatura < -10){
    console.log('copriti…ancora ti raffreddi');
}else {
    console.log('scrivi un numero');
}

/*let temperatura = prompt('inserisci la temperatura');

switch (true) {
    case (temperatura > 0 && temperatura < 20) :
            console.log('non ci sono piu le mezze stagioni');
        break;
    case (temperatura >= 30) :
            console.log('lu mare, lu sole, lu ientu');
        break;
    case (temperatura > 20 && temperatura < 30) :
            console.log('mi dia una peroni sudata');
        break;
    case (temperatura > -10 && temperatura< 0) :
            console.log('non e’ tanto il freddo quanto l’umidità');
        break;
    case (temperatura < -10) :
            console.log('copriti…ancora ti raffreddi');
        break;

        default:
            console.log('scrivi un numero');
            break;
   
} */
