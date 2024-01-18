/* 
  Encontre a solução do problema:

  Solicite 2 números, faça a soma deles e apresente o resultado final ao usuário;
*/

let numberOne = prompt("Digite um número")
let numberTwo = prompt("Digite outro número")

let result = Number(numberOne) + Number(numberTwo)

// O dado que vem do prompt sempre será String, então usamos a função construtora Number para alterar o valor para number;
alert("A soma desses dois números é: " + result)