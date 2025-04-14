//Crie um programa que receba do usuário através do prompt 6 comidas e
//refaça todos os itens do exercício 1

const prompt = require('prompt-sync')()
let comidas = []

for (let i = 1; i <= 6; i++) {
    let comida = prompt(`Digite a ${i}ª comida: `)
    comidas.push(comida)
}

console.log(comidas)
console.log(comidas[0])
console.log(comidas[4])

comidas[5] = ["feijoda"]
console.log(comidas)

comidas.push('arroz')
console.log(comidas)

comidas.splice(5, 0, 'pure de batata')
console.log(comidas)

comidas.shift()
console.log(comidas)

comidas.pop()

console.log(comidas)

console.log(comidas.slice(0,3))

console.log(comidas.slice(3,7))

console.log(comidas.length)

comidas.reverse()
console.log(comidas)

   


