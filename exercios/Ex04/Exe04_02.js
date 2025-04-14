const prompt = require('prompt-sync')();

let anoAtual = parseInt(prompt("em que ano estamos?"))
let anonascimento = parseInt(prompt("ano nascimento?"))

let idade = anoAtual - anonascimento
    switch(true){
        case idade < 10:
            console.log("faixa etaria criança");
            break;
        case idade >= 11 && idade <= 17:
            console.log("faixa etaria adolescente");
            break;
            case idade >= 18 && idade < 59:
                console.log("faixa etaria adulto");
                break;
            case idade >= 60:
                console.log("faixa etaria idoso");
                break;
default:
                console.log("idade invalida");
    }