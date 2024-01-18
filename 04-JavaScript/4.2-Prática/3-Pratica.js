/* 
  Encontre a solução do problema:

  Capturar 2 números e fazer as operações matemáticas de soma, subtração, mutiplicação, divisão e resto da divisaão;
  E mostrar um alerta para cada resultado;
*/

let firstNumber = prompt("Digite um número")
let secondNumber = prompt("Digite outro número")

// Neste exercicio ja reatribui pra number;
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const resultSome = firstNumber + secondNumber
const resultSubtration = firstNumber - secondNumber
const resultMultiplication = firstNumber * secondNumber
const resultDivision = firstNumber / secondNumber
const resultRestDivison = firstNumber % secondNumber

alert("A soma desses dois números é: " + resultSome)
alert("A subtração desses dois números é: " + resultSubtration)
alert("A multiplicação desses dois números é: " + resultMultiplication)
alert("A divisão desses dois números é: " + resultDivision)
alert("O resto da divisão desses dois números é: " + resultRestDivison)