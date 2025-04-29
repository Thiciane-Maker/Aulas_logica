const prompt = require('prompt-sync')();

let idade= Number(prompt('digite sua idade '))
if (idade<=10){
    console.log('crianca');
}else if(idade <= 17){
    console.log('adolescente');
}else if(idade<=59 ){
    console.log('aduto');
}else{
    console.log('idoso');
} 
