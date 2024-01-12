// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("hello")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numero1 = 20
const numero2 = 30
console.log(numero1 + numero2)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número.Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const number = 10

if (typeof number === 'number') {
  console.log("É um número")
} else {
  console.log("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string.Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const text = "Olá Mundo"

if (typeof text === 'string') {
  console.log("É uma string")
} else {
  console.log("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const bol = true

if (typeof bol === 'boolean') {
  console.log("É um booleano")
} else {
  console.log("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const numero3 = 70
const numero4 = 30
console.log(numero3 - numero4)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numero5 = 5
const numero6 = 5
console.log(numero5 * numero6)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numero7 = 10
const numero8 = 5
console.log(numero7 / numero8)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par.Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isPar = 10

if (isPar % 2 === 0) {
  console.log("É um número par");
} else {
  console.log("Não é um número par");
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isImpar = 7

if (isImpar % 2 !== 0) {
  console.log("É um número impar");
} else {
  console.log("Não é um número impar");
}