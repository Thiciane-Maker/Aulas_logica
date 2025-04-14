const prompt = require('prompt-sync')()
let Nota = Number(prompt("qual é a nota?"));
let Nota2 = Number(prompt("qual é a nota?"));
let Nota3 = Number(prompt("qual é a nota?"));
let media = (Nota + Nota2 + Nota3) / 5

if(media > 7 ){
    console.log("aprovado")
}
else if (media >5 && media < 7){
    console.log("recuperacao")
}
else{
    console.log("reprovado")
}


