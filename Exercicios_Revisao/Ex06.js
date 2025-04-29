//Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um
//algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7 * altura) – 58 Para mulheres: (62.1 * altura) - 44.7, exiba qual é o
//peso ideal da pessoa.

const prompt = require('prompt-sync')()

let pesohomem = 72.7
let pesomulher = 62.1
let altura = prompt('digite uma altura:')
let calcular = (pesohomem * altura) - 58
let calcular2= (pesomulher * altura) - 44.7

console.log(`o peso ideal do homem: ${calcular} e o peso ideal do mulher e: ${calcular2}`)