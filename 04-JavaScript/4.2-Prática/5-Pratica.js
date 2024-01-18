/* 
  Encontre a solução do problema:

  Solicitar o nome de um aluno e as 3 notas do bimestre dele, calcular a média daquele aluno;

  A média deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns;
  Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação;
  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota;
*/

let studentName = prompt("Digite seu nome")

let firstNote = prompt("Digite a primeira nota")
let secondNote = prompt("Digite a segunda nota")
let thirdNote = prompt("Digite a terceira nota")

// Neste exercicio ja reatribui para number;
firstNote = Number(firstNote)
secondNote = Number(secondNote)
thirdNote = Number(thirdNote)

// Fazendo a média
let gradeAverage = (firstNote + secondNote + thirdNote) / 3


if (gradeAverage >= 6) {
  alert('Parábens você passou')
} else {
  alert('Que pena você não passou, mas não desanime, de o melhor na prova de recuperação')
}

alert(studentName + " sua nota final foi: " + gradeAverage.toFixed(2))