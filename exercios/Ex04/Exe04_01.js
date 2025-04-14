const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um numero de 1 a 7"));
let DiaSemana;

switch(numero){
    case 1:
        DiaSemana = "Domingo";
        break;
        case 2:
            DiaSemana = "Segunda";
            break;
            case 3:
                DiaSemana = "Terça";
                break;
                case 4:
                    DiaSemana = "Quarta";
                    case 5:
                        DiaSemana = "Quinta";
                        break;
                        case 6:
                            DiaSemana = "Sexta"
                            break;
                            case 7:
                                DiaSemana = "Sabado"
                                default:
                                    console.log(`dia ${DiaSemana}`)

                  
                            
                    
                    
}               