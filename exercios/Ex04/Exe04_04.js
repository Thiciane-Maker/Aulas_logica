const prompt = require('prompt-sync')();

let mes = prompt('digite o nome do mes:').toLocaleLowerCase();


switch (mes){
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        console.log(`${mes} tem 31 dias`);
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        console.log (`${mes} tem 31 dias`)
    break;
     case "fevereiro":
        console.log(`${mes} tem 29 dias`);
        break;
        default:
            console.log ("mes invalido");
}