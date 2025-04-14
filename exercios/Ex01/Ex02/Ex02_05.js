const prompt = require('prompt-sync')();

idade = Number(prompt("digite seu ano de nascimento"))
    if(idade >= 2000){
        console.log("voce é maior de idade")
    } else{
        console.log("voce e menor de idade")
    }
