//Operadores aritméticos
//somando dois numeros inteiros
console.log( 15 + 25);

console.log( 100 - 45);// subtraçao
console.log( 12 * 7);// mutiplicaçao
console.log( 144 /12); //divisao
console.log( 20 % 3); // & é o operador do resto da divisao(modulo)
console.log(2 ** 5); // ** é o operador de exponenciaçao 2⁵

//Exercios de variaveis e entradas de dados

//1-
let nome = "thiciane";
let altura = 1.68;
let escola = "sesi andradina"
let ano = 2
console.log ("thiciane, altura 1.68, escola sesi,2 ensino medio")

//2-
let nome2 = "ricardo"
let materia = "senai"
let ano2 = 2022
console.log ("Ricardo, materia senai, e ingresso na escola em 2022")

//Importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

nome = prompt("qual e seu nome?")
altura = parseFloat(prompt("qual e sua altura?"))
escola = prompt("qual escola voce frenqueta?")
ano = parseInt(prompt("qual ano?"))
console.log ("thiciane, altura 1.68, escola sesi,2 ensino medio")

nomeProfessor = prompt("qual o nome do professor?")
materia = prompt("qual materia?")
anoIngresso = parseInt(prompt("qual ano ingresso?"))
console.log ("Ricardo, materia senai, e ingresso na escola em 2022")


