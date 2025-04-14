//Importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')();

// Variaveis e constantes
// Receber o nome da pessoa
let nome = "roberto"
let idade = 25;

console.log ("roberto,25,82")

// REceber e armazena o texto
 let     curso  =       "Desenvolvimento de Sistemas"
// #tipo nome  recebe   valor    na variavel
//Exibir o valor amarzenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 35 // valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "lyuz"


console.log("ola",nome2, "voce tem:", idade2, "e hoje esta fazendo", temperatura, "°C" )


//Usando template string
console.log(`Ola ${nome2}, voce tem ${idade2} e hoje esta fazendo: ${temperatura}°C`)



let chovendo = false;
let dia = true;
// nas constantes nao podem ser reatribuidos novos valores
const PI = 3.1415;
console.log(PI);

// Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('qual e seu nome?')
//usando o parseInt ou parseFloat converte os valores recebidos
//que vem como string para int ou float
idade = parseInt("qual sua idade: ")
peso = parseFloat(prompt('Qual seu peso? '))

console.log(`seu nome e ${nome}, voce tem ${idade} e pesa ${peso}`)
// valida o tipo de variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores e possivel realizar
//caculos matematicos
console.log(idade + peso);
