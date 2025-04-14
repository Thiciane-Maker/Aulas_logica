//Leia 2 notas de um aluno, calcule a média e imprima aprovado ou reprovado (para
//ser aprovado a média deve ser no mínimo 7cd

const prompt = require('prompt-sync')();

let Nota = Number(prompt("qual é a Nota?"));
let Nota2 = Number(prompt("qual é a nota?"));
let media = (Nota + Nota2) / 2

if(media >= 7 ){
    console.log("aprovado")
} else{
    console.log("reprovado")
}