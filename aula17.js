//variaveis globais e locais
function nomeescola(){
escola = "SESI"
console.log(escola);
//declarando um variavel local
var cidade = 'Andradina'
}

//essa variavel e uma variavel global pois ela pode ser acessada em qualquer 
//parte do codigo
var escola = 'SENAI'
console.log(escola)
nomeescola()
var cidade = 'mirandopolis'
console.log(cidade)

var x = 10 // variavel global
console.log('fora da funçao', x);

function minhafuncao(){
    let x = 0; //variavel local
    x = x + 1;
    console.log('dentro da funçao', x)

}

minhafuncao()

console.log('fora da funcao de novo', x);