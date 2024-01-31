let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

alert(`A soma dos dois números é: ${firstNumber + secondNumber}`)
alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`)
alert(`A multipicação dos dois números é: ${firstNumber * secondNumber}`)
alert(`O resto da divisão dos dois números é: ${firstNumber % secondNumber}`)

const isEven = firstNumber + secondNumber;

// Verificação se o valor é um número par
if (isEven % 2 === 0) {
  alert("É um número par");
} else {
  alert("É um número ímpar");
}

if (firstNumber == secondNumber) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}