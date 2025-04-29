//Faça uma função que receba dois números inteiros como parâmetro e gere os
//números inteiros que estão no intervalo compreendido por eles.

let a = 92
let b = 33

if (a < b) {
  for (let i = a + 1; i < b; i++) {
    console.log(i)
  }
} else {
for (let i = b + 1; i < a; i++) {
    console.log(i)
  }
}