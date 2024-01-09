# Funções

- Funções são **tipos de dados estruturais**, que são **declarados** dessa forma: **function nomeFunção() { código à ser executado }** e para **executar a função**, usa-se: **nomeFunção()**;
- Uma função é importante para o agrupamento e reutilização de código;

```js
// Exemplo de uma função que chama uma frase

// Passo 1 - declaração da função (declaration);
function createPhrases() {
  console.log("Frase1")
  console.log("Frase2")
  console.log("Frase2")
}

// Passo 2 - Executar a função | execute, run, call, invoke
createPhrases()
```

## Argumentos e Parâmetros

- Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}.

```js
// Esse jeito de criar função é chamado de função anônima, pois não tem nome (function anonymous)
const variavel = function () {}
```

- **Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.**

```js
const sum = function (number1, number2) {
  // parâmetros(parameters)
  console.log(number1 + number2)
}

sum(2, 3) // argumentos(arguments)
```

## Return

- **Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.**

```js
const sum = function (number1, number2) {
  let total = number1 + number2
  // Uma função sempre retorna algo, se não tiver o Return, o valor de retorno padrão será undefined
  return total
}

sum(2, 3)
```

### Function Scope

> Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

### Function Hoisting

> O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

## Arrow Functions

Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.

- Uma arrow function é uma nova forma de criar funções em JavaScrip;
- Ela é mais concisa e legível do que uma função tradicional;

```js
// Exemplo de arrow function
const sayMyName = name => {
  console.log(name)
}

sayMyName("savio")
```

## Callback Function

Uma callback function é uma função que está sendo passada para outra função como parâmetro.

> O conceito de callback functions é usado para executar uma tarefa ou rotina após outra tarefa ou rotina ser concluída.
> Em JavaScript, as callback functions são geralmente usadas para lidar com operações assíncronas, como a leitura de dados de um servidor ou o carregamento de uma imagem.

```js
function sayMyName(name) {
  console.log("antes de executar a função callback")
  name()
  console.log("depois da função callback")
}

// Exemplo de callback function, função por parâmetro
sayMyName(() => {
  console.log("estou em um callback")
})
```

## Funções Construtoras

Funções construtoras são utilizadas para e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

- Expressão **new**;
- Cria um **novo objeto**;
- **This** keyword;

```js
function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}

// Utilizando o new essa função vira uma função construtora
const mayk = new Person("Mayk") // "Mayk"
const joao = new Person(savio.wal()) // "Savio está andando"
```
