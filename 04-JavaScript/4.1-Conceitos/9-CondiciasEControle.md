# Condicionais e Controle de Fluxo

## If e Else

Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples:

```js
if (condição) {
  //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
```

Veja um exemplo de multiplas condicionais:

```js
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log("Febre alta")
} else if (mediumTemperature) {
  console.log("Febre moderada")
} else {
  console.log("Saudável")
}
```

## Switch

Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if , else if e else, porém a estrutura é bem diferente:

```js
let expression = ""

switch (
  expression // puxa a expressão para o switch
) {
  case "a": // confere se o valor da expressão é o correto
    console.log("a")
    break // para a execução do switch apenas se verdadeiro
  case "b":
    console.log("b")
    break
  default: // caso nenhum valor seja o correto, realizará a
    //instrução dentro de si.
    console.log("default")
    break
}
```

Veja um exemplo de uma calculadora com o switch:

```js
function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 / number2
      break
    default:
      console.log("não implementado")
      break
  }

  return result
}

console.log(calculate(4, "+", 8))
```

## Throw e Try/Catch

- São parte do controle de fluxo da aplicação.
- **Throw** em inglês significa **lançar**, **disparar** já o **Catch** quer dizer **pegar** e **Try** significa **Tentar**.

**Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação**

Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

```js
// Nesse caso, se o nome vier vazio, será disparada uma mensagem.
function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatório"
  }

  console.log(name)
}
```

**Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação inteira, e nós o faremos da seguinte maneira:**

```js
try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log("após ao try/catch")
```

**O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.**

> Observações:
>
> **Um throw sem um try catch quebra a aplicação toda.**
>
> Quando você usa um throw, você está lançando uma exceção. Uma exceção é um evento que interrompe o fluxo normal de execução do código.
>
> Se uma exceção é lançada sem um try catch, o interpretador JavaScript irá parar a execução do código e gerar um erro. O erro será exibido no console ou no navegador.
