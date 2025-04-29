//Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
//função que receba o valor a ser convertido e imprima a conversão em dólar e em euro

var dolar = 5.67
var euro = 6.44

function converter(valor) {
    console.log('dolar:', + (valor / dolar))
    console.log('euro:', + (valor / euro))
}

converter(100)

//===================================================================================//

//correçao

let cotacaodolar = 5.65;
let cotacaoeuro = 6.64;

function convertermoeda(valorreais){
    let valoremdolar = valorreais / cotacaodolar;
    let valoremeuro = valorreais / cotacaoeuro;

    console.log(`R$ ${valorreais.toFixed(2)} equivale a:`)
    console.log(`US$ ${valoremdolar.toFixed(2)}`)
    console.log(`€ ${valoremeuro.toFixed(2)}`)

}

convertermoeda(100)
convertermoeda(50)
convertermoeda(10)