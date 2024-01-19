# Tipos de dados

## String

- O tipo de dados **String** consiste em uma **cadeia de caracteres**, ou seja, **textos**;
- Para denotar string no JavaScript são usados **aspas duplas** ( " " ), **aspas simples** ( ' ' ) e **template strings** (``) ou **template literals**;
- Template literals **permitem textos multilinhas** e **expressões de linguagem** com os caracteres **${ }**, por exemplo:

```js
// Exemplo de uma Template Literals
console.log(`A soma de duas unidades é ${1 + 1}`)

// Exemplo de uma string normal
console.log("Isso é um texto")
```

## Number

- O tipo de dado **Number** consiste em um **valores numéricos**, ou seja, **números**;

```js
/* Exemplos de Numbers:*/

33 // Inteiros;
12.5 // Reais;
NaN // Not a Number;
Infinity // Infinito;
```

## Boolean

- O tipo de dado **Boolean** só tem dois valores;
  - True ou False;

```js
// Valor booleano true;
console.log(true)

// Valor booleano false;
console.log(false)
```

## Undefined x Null

- O tipo de dado **Undefined**, representa valores **indefinidos**:
  - É considerado como um objeto vazio, ou seja, algo indefinido que não existe;
- Já o tipo de dado **Null** , é um dado que existe mas não tem valor algum:
  - Nulo;
  - Diferente de Indefinido;

```js
// Valor null;
console.log(null)

// Valor undefined;
console.log(undefined)
```

## Object

Dados do tipo **Object** são objetos e possuem **atributos** (propriedades) e **métodos** (funcionalidades).

```js
// Criando um Object copo;
const copo = {
  material: "vidro", //Atributo String;
  capacidade: 250, // Atributo Number;
  cheio: function () {
    // aqui podemos declarar uma função/método que será atribuído ao Object;
  }
}
```

## Array

Um dado do tipo Array representa um agrupamento de dados em forma de lista.

```js
// Criando um Array shoppingList
const shoppingList = ["leite", "ovos", "chocolate"]
```
