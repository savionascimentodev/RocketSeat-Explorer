# Estruturas de Repetição

## For

o loop "for" é uma estrutura de controle que permite **executar um bloco de código repetidamente**. Ele geralmente é usado para percorrer elementos de uma lista (como um array) ou para executar uma operação um número específico de vezes. Aqui está um exemplo básico de um loop "for" em JavaScript:

```js
// Utilizando o loop "for" para inicializar a variável i com 0; continuar enquanto i for menor que 5; incrementar i a cada iteração
for (let i = 0; i < 5; i++) {
  // Imprimindo o valor atual de i no console
  console.log(i)
}
```

## While

O loop "while" também é uma estrutura de controle em JavaScript que permite **executar um bloco de código enquanto uma condição específica for verdadeira.** Aqui está um exemplo:

```js
// Inicializando a variável contador com o valor 0
let contador = 0

// Usando o loop "while" para executar o bloco de código enquanto a condição for verdadeira
while (contador < 5) {
  // Imprimindo o valor atual do contador no console
  console.log(contador)

  // Incrementando o contador para evitar um loop infinito e atualizando a condição
  contador++
}
```

## For of

O loop "for...of" é utilizado para **percorrer elementos de objetos iteráveis, como arrays, strings, Map, Set, entre outros.** Aqui está um exemplo usando um array:

```js
// Definindo um array de frutas
const frutas = ["maçã", "banana", "laranja"]

// Utilizando o loop "for...of" para iterar sobre cada elemento do array
for (const fruta of frutas) {
  // Imprimindo cada fruta no console
  console.log(fruta)
}
```

## For in

O loop "for...in" é usado para **iterar sobre as propriedades enumeráveis de um objeto**. Aqui está um exemplo com comentários explicativos:

```js
// Definindo um objeto com algumas propriedades
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
}

// Utilizando o loop "for...in" para iterar sobre as propriedades do objeto
for (let chave in carro) {
  // Verificando se a propriedade pertence ao objeto em questão, não aos protótipos
  if (carro.hasOwnProperty(chave)) {
    // Imprimindo a chave (nome da propriedade) e o valor correspondente no console
    console.log(`${chave}: ${carro[chave]}`)
  }
}
```
