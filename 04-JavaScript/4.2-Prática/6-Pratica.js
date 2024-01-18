/* 
  Encontre a solução do problema:

  Capture 10 items para compor a lista de um supermercado;
  Após capturar os 10 items, imprima-os, separando por vírgula;
*/

let fruits = []

for (let item = 0; item < 10; item++) {
  fruitsName = prompt("Digite uma fruta " + (item + 1));

  fruits[item] = fruitsName
}

alert(fruits.concat(','))