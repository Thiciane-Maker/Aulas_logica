//Peça ao usuário para digitar um número de 1 a 7 e imprime o dia da semana correspondente

const prompt = require('prompt-sync')();

let DiaS = Number(prompt('digite um numero de 1 ate 7 '))
if (DiaS==2){
    console.log('segunda');
}else if(DiaS==1){
    console.log('domingo');
}else if(DiaS==3){
    console.log('terca');
}else if (DiaS==4){
    console.log('quarta');
}else if(DiaS==5){
    console.log('quinta');
}else if (DiaS==6){
    console.log('sexta');
}else if (Dias==7){
    console.log('sabado');
}else{
    console.log('domingo');
}

