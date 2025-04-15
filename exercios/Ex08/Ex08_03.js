const prompt = require('prompt-sync')()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"]
    let mes2 = "J"
    for(let mes1 of meses){
    if(mes1.includes(mes2))
        console.log(mes1)
    }