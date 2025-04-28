//Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
//função que receba o valor a ser convertido e imprima a conversão em dólar e em euro

var dolar = 5.67
var euro = 6.44

function converter(valor) {
    console.log('dolar:', + (valor / dolar))
    console.log('euro:', + (valor / euro))
}

converter(100)