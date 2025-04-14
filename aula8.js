const prompt = require('prompt-sync')();

let altura = Number(prompt ('digite sua altura'));
let peso = Number(prompt('digte seu peso'));
let imc = peso / (altura **2)
if (imc < 18.5){
    console.log ('abaixo do peso ideal')
}else if (imc >= 18.5 && imc < 25){
    console.log ('peso ideal')

}else if(imc >= 25 && imc< 30){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}

//verificar se o triangulo é equilatero ou escaleno
//receber valor

let lado1 = Number(prompt('digite o valor do lado 1'));
let lado2 = Number(prompt('digite o valor do lado 2'));
let lado3 = Number(prompt('digite o valor do lado 3'));

//verificar se o triangulo é equilatero caso tenha todos os
//lados iguais

let eq = (lado1 == lado2) && (lado2 == lado3)

let es = (lado1 != lado2) && (lado2 - lado3) && (lado1 != lado3)

console.log('triangulo equilatero?',eq, 'triangulo escaleno?', es);


//construa um algoritmo que receba o valor de 3 lados de um triangulo e
//verifique se ele é um equilatero ou escaleno

let lados1 = prompt('digite lados1:');
let lados2 = prompt ('digite lados2:')
let lados3 = prompt ('digite lados3:');

if (lados1==lados2 && lados2==lados3){
    console.log('triangulo equilatero')

} else if (lados1!=lados2 && lados2 !=lados3 && lados1!=lados3){
    console.log('triangulo escaleno');

}else{
    console.log('triangulo isosceles')
 }


 //descobrir a quantidade de horas trabalhadas
 let horas = Number(prompt('total de horas trabalhadas:'))
 let vendas = Number(prompt('total de vendas:'))

 //validar se umas das condiçoes foi atendida
 // (mais de 5000 em vendas ou mais de 40 horas trabalhadas

 if (vendas> 5000|| horas > 40){
    console.log("tem direito ao bonus")

 }
 else{
    console.log("nao tem direito ao bonus")
 }

 //crie um algoritmo que receba um caractere e verifique se ele e 
 //uma vogal ou uma consoante 

 let c1 = (prompt(' digite seu caractere: '))

 if( c1 == "a" || c1 == "e" || c1 == "i" || c1 == "o" || c1 == "u" ){
     console.log('seu caractere é vogal');
 }else{
     console.log('seu caractere é consoante');
 }
 