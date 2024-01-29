/* 
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

const result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')

// Lógica para gerar um número aleatório menor que 10;
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result != randomNumber)) {
  prompt("Erro, tente novamente");
  xAttempts++
}

// Maneira simples de fazer interpolação;
// alert('Parabéns você adivinhou o número em' + xAttempts + ' tentativas')

// Interpolação de Strings com Template Literals ou Template Strins;
alert(`Parabéns você adivinhou o número em' ${xAttempts} tentativas`)

