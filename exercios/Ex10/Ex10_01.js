//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada a função deve retornar o número atual de chamadas.

var chamadas = 10

console.log('numero de chamadas:', chamadas)

function chamadasatuais() {
    chamadas + 1
    console.log('chamada:', chamadas)
    return chamadas
}

chamadasatuais()
chamadasatuais()
chamadasatuais()

console.log('chamadas atuais:', chamadas)


//===============================================================================================//

//correçao

let contador = 0;
function contar(){
    contador = contador +1
    //contador++
    //contador +=1
}

contar()
contar()
contar()
 console.log(contador)