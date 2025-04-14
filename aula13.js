//declarando um novo vetor
//reconheço que e um vetor uso de colchetes
let listaVazia = [];
console.log(listaVazia)

//declarar uma lista de numeros 
let numeros = [1,2,3,4,5,6];
console.log(numeros);
console.log(numeros[2]);

//declaraçao de uma lista de strings
let nomes = ['ana','joao','maria'];
console.log(nomes);


//declaraçao de uma lista mista
let listaMista = [1,'dois', true, 2.5]
console.log(listaMista)


let listacomlista = [
    ["coca-cola", "lanche"],
    [5.0, 10.0]
]
console.log(listacomlista)

//Alterando valores da lista 
let frutas = ['maça', 'pera', 'uva', 'abacaxi']
console.log(frutas);
frutas.push('laranja')
console.log(frutas);
//o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'banana']
console.log(frutas);

//A funçao splice adiciona um novo intem em uma posiçao especifica
//especifica a partir de um valor no indice+
frutas.splice(2,0, 'morango')
console.log(frutas)

//excluindo item na lista 
frutas.splice(3,3)// excluindo item pelo indice
console.log(frutas);
frutas.shift()//esxecutando primeiro item da lista
frutas.pop()//excluir ultimo item da lista
console.log (frutas)

//acessar os itens da lista
console.log(frutas[3]); //acesso apartir de uma posiçao especifica
console.log(frutas.slice(0,4)) //mostra posiçao zero ate a quatro
console.log(frutas.slice(1)) // mostra apartir da posiçao um
console.log(frutas.slice(-1)) // total de itens na lista
console.log(frutas.length);

//ordenar intens da lista
console.log(frutas)
frutas.sort()//ordenar a lista da forma crescente
console.log(frutas)
frutas.reverse()// ordenando de forma descrescente
console.log(frutas);