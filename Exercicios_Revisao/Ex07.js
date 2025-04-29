//Faça um Programa que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que
//são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça
//um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o
//salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:
//+ Salário Bruto: R$
//- IR (11%): R$
//- INSS (8%): R$
//- Sindicato (5%): R$
//= Salário Liquido: R$
//Obs.: Salário Bruto - Descontos = Salário Líquido.

const prompt = require('prompt-sync')();


let ganho = Number(prompt('quanto voce ganha:'))
let hora = Number(prompt('numero de horas:'))
let salario = + ganho + hora
let ir = salario * 0.11
let inss = salario * 0.88
let sindicado = salario * 0.05
let desconto = ir + inss + sindicado
let salarial = salario - desconto
console.log(`salario bruto:${salario}`)
console.log(`salario ir:${ir}`)
console.log(`salario inss:${sindicado}`)
console.log(`salario desconto:${desconto}`)
console.log(`salario salarial:${salarial}`)


