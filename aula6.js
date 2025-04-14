const prompt = require('prompt-sync')()

//operaçoes com variaveis
let nr1 = Number(prompt('Digite um numero?'));
let nr2 = Number(prompt('Digite um numero?'));

//-------------------------------------------------------------------------//

//adiçao
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`);

//subtraçao
let subtracao = nr1 - nr2;
console.log(`A subtraçao entre ${nr1} - ${nr2}  é igual: ${subtracao}`)

//mutiplicaçao
let mutiplicacao = nr1 * nr2;
console.log(`A mutipliçao entre ${nr1} * ${nr2}  é igual: ${mutiplicacao}`)

//divisao
let divisao = nr1 / nr2;
console.log(`A divisao entre ${nr1} / ${nr2}  é igual: ${divisao}`)

//exponenciaçao
let exponenciacao = nr1 ** nr2;
console.log(`A exponenciaçao entre ${nr1} ** ${nr2}  é igual: ${exponenciacao}`)

//------------------------------------------------------------------------------//

//calculando novo preco do celular com desconto
let valor = Number(prompt('digite o preco do celular: '));
let desconto = Number(prompt('digite o preco do desconto: '));

valor = valor
console.log(`o valor do celular com desconto R$${valor}`)

//-------------------------------------------------------------------------------//

//exercio 1
let numero = Number(prompt('digite o numero: '));
let dobro = numero * 3
let metade = numero/ 2
console.log(`exiba o dobro do numero: ${dobro} e a metade do numero: ${metade}`)

//exercio 2
let quantia = 100 *8
let total = quantia * 15



