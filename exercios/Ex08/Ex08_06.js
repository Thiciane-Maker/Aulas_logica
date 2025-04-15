//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o','u']
let palavra = prompt ('digite uma letra:')
let quantidade = 0;
for(let letra of palavra){
    if(vogais.includes(letra)){
        quantidade++
    }
}
console.log(`${palavra} tem ${quantidade} vogais`)