//criando nosso primeiro FOR

for(let i = 0; i < 100; i++){
    console.log(i)

}

//entregando os notebooks por ordem
const prompt = require('prompt-sync')();
console.log("entregando notebooks")

for(let nr = 1; nr <= 32; nr++){
    let nome = prompt(`quem numero ${nr}`)
    let presente = prompt(`O (A) ${nome} veio para escola (s ou n)`)

    if (presente=='S'){
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`Pegar levar notebook ate ${nome}`);


        }
        else{
            console.log(`nao pegar notebook ${nr}`);
        }

    }