const prompt = require('prompt-sync')()

let metro = Number(prompt('metro: 1.80'));
let centimetro = 1.80 * 100
let milimetros = 1.80 * 1000
let kilometros = 1.80 / 10 / 10 / 10

console.log(`temos metro em: ${1.80} se convertemos para centimetros ficara: ${centimetro}, agora para milimetros: ${milimetros} e por ultimo em km fica: ${kilometros}`)

