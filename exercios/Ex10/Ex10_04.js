//Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
//depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
//saldo. Crie um menu interativo com while para navegar entre as funções:
//[1] Depositar
//[4] Parar programa
//[2] Sacar
//[3] Consultar saldo

let saldo = 0;

//criar funcao sacar
function sacar (valorsaque){
    saldo -= valorsaque
}

//mostrar saldo
function mostrarsaldo(){
    console.log(`seu saldo: ${saldo}`)
}


//criar a nossa funçao depositar
function depositar(valordeposito){
    saldo += valordeposito;    
}

//menu interativo
function caixaeletronica(){
    const prompt = require('prompt-sync')()
    let opcao = 0;

    while(opcao != 4){
        console.log('=== caixa eletronica ===')
        console.log('[1] - depositar')
        console.log('[2] - sacar')
        console.log('[3] - mostrar saldo')
        console.log('[4] - sair')

        opcao = Number(prompt('escolha uma opcao:'))

        switch(opcao){
            case 1:
                let valordepositado = Number(prompt( 'digite o valor a ser depositado:'));
                depositar(valordepositado)
                break;

            case 2:
                    let valorsaque = Number(prompt( 'digite o valor a ser secado:'));
                sacar(valorsaque)
                break;
            case 3:
                mostrarsaldo();
                break;
            case 4:
                console.log('obrigado por usar o banco thici')
                break;
            default:
                    console.log('opçao invalida')
        }
    
    
    }


}

caixaeletronica()