//Faça um algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra
//escrever: F - Feminino, M – Masculino, se não for nenhuma das opções, Sexo Inválido.

const prompt = require('prompt-sync')();

let sexo= (prompt('digite uma letra (M ou F):'))
if (sexo =='F'){
    console.log('Feminino');
}else if(sexo == 'M'){
    console.log('Masculino');
}else{
    console.log('Sexo Invalido');
} 
