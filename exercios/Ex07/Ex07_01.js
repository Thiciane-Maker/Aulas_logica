//crie uma lista de filmes com 7 filmes e faça as seguites operaçoes com ela:
const prompt = require('prompt-sync')()

let filmes =['O Rei Leão', 'CHINATOWN', 'Monster', 'O Túmulo dos Vagalumes', 'Guerra e humanidade', 'Filhos de Hiroshima', 'Harakiri', 'Era uma Vez em Tóquio']
console.log(filmes)
console.log(filmes[0])
console.log(filmes[3])
filmes[7] = 'moranguinho'
console.log(filmes)
filmes.push('barbie')
console.log(filmes)
filmes = [...filmes,'barbiezinha']
filmes.splice(5,0,'poly')
console.log(filmes)
filmes.splice(0,1)
filmes.shift()
filmes.pop
console.log(filmes)
filmes.splice(0,7)
filmes.shift()
filmes.pop
console.log(filmes)

filmes =['O Rei Leão', 'CHINATOWN', 'Monster']
console.log (filmes[0])
console.log (filmes[1])
console.log(filmes[2])

filmes =['O Rei Leão', 'CHINATOWN', 'Monster', 'O Túmulo dos Vagalumes', 'Guerra e humanidade', 'Filhos de Hiroshima', 'Harakiri', 'Era uma Vez em Tóquio']

console.log (filmes[4])
console.log (filmes[5])
console.log(filmes[6])
console.log(filmes[7])

filmes =['O Rei Leão', 'CHINATOWN', 'Monster', 'O Túmulo dos Vagalumes', 'Guerra e humanidade', 'Filhos de Hiroshima', 'Harakiri', 'Era uma Vez em Tóquio']
console.log(filmes.length)

filmes =['O Rei Leão', 'CHINATOWN', 'Monster', 'O Túmulo dos Vagalumes', 'Guerra e humanidade', 'Filhos de Hiroshima', 'Harakiri', 'Era uma Vez em Tóquio']
filmes.reverse()
console.log(filmes)