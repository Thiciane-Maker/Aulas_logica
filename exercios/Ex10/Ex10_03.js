let listanomes = [];

function adicionarnome(nome){
    listanomes.push(nome);

}

function removernome(){
    listanomes.pop()
}

function removerpornome(nome){
    let posicao = listanomes.indexOf(nome)
    //quando o indexof nao encotrara o elemento ele retorna -1
    if (posicao != -1){
        listanomes.splice(posicao,1)
    }else{
        console.log('nome nao encontrado')
    }
}

adicionarnome('Saori');
adicionarnome('thici');
adicionarnome('aghata nunes');
console.log(listanomes)
adicionarnome('ygona');
console.log(listanomes)
removernome()
console.log(listanomes)
removernome('thici')
console.log(listanomes)
