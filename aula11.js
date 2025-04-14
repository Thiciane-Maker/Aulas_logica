//trabalhando com lanços de repetiçao (while)

//executar o laço x vezes
let contador = 1;
//ira repetir enquanto a condiçao for verdadeira
// ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <=5){
         console.log(`o contador é ${contador}`)
         //incrementado a variavel ou seja adicionando o valor a ela
         // para que continue o processo ate que a condiçao seja atiginda
         // contador = contador ++;
         contador = contador + 1;


}
console.log("Fim")



const prompt = require('prompt-sync')();

let senha_senai = '12345'

while(true){
 let senha = prompt('Digite a senha')
 if(senha_senai == senha){
    console.log('voce hackeou a senha');
    break;
 }else if(senha== 'desisto'){
    break;
 }
}
console.log('fim');

//-----------------------------------------------------------------------------------------------------------------------------//


//atividades

let soma = 0;
let quantidade = 0;

while(true){
    let valor = Number(prompt('digite o valor do produto):'));
    if(valor == 0){
        break;

    }
    else{
        soma = soma + valor;
        quantidade++;
    }
}
console.log(`foram informados ${quantidade}`)
console.log(`valor total produto ${soma.toFixed(2)}`);




let soma2 = 0;
let quantidade2 = 0;
let encerrar =""
while(encerrar != "sub total"){
    let valor = Number(prompt('digite o valor'));
      soma2 = soma + valor;
        quantidade2++;
        encerrar = prompt("deseja continuar:(digite sub total)")

}
console.log(`foram informados ${quantidade}`)
console.log(`valor total produto ${soma.toFixed(2)}`);

//crie um jogo de adivinhaçao
// o computador precisa sortear um numero aleatoriocom o random
// e o  usuario precisa digitar um numero,
//enquanto ele nao acertar continua pedindo um novo numero

console.log("######################################");
console.log("❤️ JOGO DA ADIVINHAÇAO ❤️");
console.log("####################################");

let nrsorteado = Math.floor(Math.random() * 100 + 1) //gera um numero aleatorio
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('💕 Digite um numero entre 1 e 100 💕'))

    if(chute > nrsorteado){
        console.log(`Voce chutou ${chute}, tente um numero 😎!`);


    }
    else if (chute < nrsorteado){
        console.log(`Voce chutou ${chute}, tente um numero 😉!`);

    }
    else if (chute == nrsorteado){
        console.log(`Voce chutou ${chute}, 😆 Parabens voce acertou!`);
        acertou = true;
    }
}
console.log("fim")