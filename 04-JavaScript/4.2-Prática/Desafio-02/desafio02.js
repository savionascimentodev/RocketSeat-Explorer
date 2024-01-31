const alunos = [
  {
    name: 'Luffy',
    grade1: 1,
    grade2: 2
  },
  {
    name: 'Zoro',
    grade1: 4,
    grade2: 3
  },
  {
    name: 'Sanji',
    grade1: 9,
    grade2: 9.5
  },
  {
    name: 'Franky',
    grade1: 8,
    grade2: 7
  },
]

let media = 0

function averageGrade(grade1, grade2) {
  return media = (grade1 + grade2) / 2
}

function result(aluno) {
  const phrase = `A média do aluno ${aluno.name} foi: ${media} \n`

  if (media > 7) {
    alert(`${phrase} Parabéns ${aluno.name}! Você foi aprovado!`)
  } else {
    alert(`${phrase} Infelizmente ${aluno.name}! Você foi reprovado!`)
  }
}

for (let aluno of alunos) {
  averageGrade(aluno.grade1, aluno.grade2);
  result(aluno)
}