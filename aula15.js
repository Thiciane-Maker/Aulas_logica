
const prompt = require('prompt-sync')();

//criando nossa primeira funçao

function Cabecalho(texto){
    console.log('------------------------------')
    console.log(texto)
    console.log('------------------------------')
}

//criando outra funçao, funçao de saudaçao
function Saudaçao(){
    let nome = prompt('digite seu nome:')
    console.log(`${nome} tenha um PESSIMO dia`)
}

//chamada a funçao
//passando parametro junto com a funçao 
Cabecalho('SESI/SENAI')
//posso declarar uma variavel e passa-la como parametro para funçao
let escola = 'Sesi-025'
Cabecalho(escola)
Saudaçao()

//criei a funçao soma que ira receber dois valores como parametro
//a partir desses valores, realizara o caculo e mostrara o resultado
function Soma(n1,n2){
    let resultado = n1 + n2
    console.log(resultado)

}
Soma(5,6)
Soma(8,9)
Soma(11,67)


//atividade
function parimpar(num){
    if(num % 2 != 0){
        console.log('impar')

    }else
    console.log('par')
}
parimpar(5)
parimpar ( 6)

//======================================================================================================================//


//funçao com retorno do resultado
//o calculo é realizado e é retornado para chamada da funçao 
function media(n1,n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}
console.log(media(33,45))
//armazanei o retorno da funçao em uma variavel
let valor = media(119,7);
//utilizei o retorno da funçao para escrever na tela
console.log(valor);
//utilizei o variavel que recebeu o retorno da funçao para
//chamar a funçao par ou impar passando o valor com parametro
parimpar(valor)


