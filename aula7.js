// estrutura condicionais e operadores relacionais
let a = 2;
let b = 3;

//operadores relacionais
console.log(a == b); // relaçao de igualdade
console.log(a !== b); // relaçao de diferença
console.log(a > b); // maior
console.log(a >= b); // maior ou igual
console.log(a < b); // menor
console.log(a <= b); // menor ou igual

// Estrutura condicionais
let tenhoingresso = true;
if(tenhoingresso == true){
    //bloco de codigo
    console.log('Posso entrar!')
}

//validando maior idade
const prompt = require('prompt-sync')();
// receber o valor idade 
let idade = Number(prompt(`Qual a sua idade?`))

//verifique se é maior idade ou igual a 18
if(idade>= 18)
    {console.log('maior idade')}

tenhoingresso = true;
if(tenhoingresso == true){
    //bloco de codigo
    console.log('Posso entrar!')
}else{
    console.log('estoubarado no baile')
}

//outro exemplo de estrutura condicional (if else)
idade = Number(prompt('Digite a idade'))
//Verificar se é maior de idade
if(idade >= 18){
    console.log('Voce é maior de idade');
}else{
    console.log('Voce é menor de idade')
}