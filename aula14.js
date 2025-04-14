let frutas = ['maça','banana','uva','abacaxi']

//a variavel x serve para iterar os valores ate o limite da lista
//O nome nao e obrigatoriamente ser nome i, x ou contador
//pode ser qualquer nome variavel
for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`a fruta e ${frutas[x]}`)
}

let listanomes = ['bill gates', 'aizen', 'sukuna', 'gin', 'urahara']
//para cada nome da lista nomes, escreva um nome
for(let nome of listanomes){
    console.log(nome)
}

//verificando uma consoante
const prompt = require('prompt-sync')()

let vogais = ['a', 'e', 'i', 'o','u']
let letras = prompt ('digite uma letra:')
//se letra estiver incluso na lists de vogais, identifico que 
// e uma vogal
if(vogais.includes(letras.toLocaleLowerCase())){
    console.log(' e uma vogal')
}


//consoantes
let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let digitar = prompt ('digite uma letra:')
if(consoante.includes(digitar.toLocaleLowerCase()))
    console.log(' e uma consoante')

//obtendo a posiçao do item 
for(let[pos,frutas] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posiçao e a fruta
    console.log(`posiçao${pos} e fruta ${fruta}`)
}

//separando os itens em uma lista
let produtos = 'celular, notebook, tv, tablet'
let listaprodutos = produtos.split(',')
for(let produtos of listaprodutos){
    console.log(produtos)
}

//percorrendo uma string com uma lista
let palavra = 'senai'
for(let letra of palavra){
    console.log(letra)
}