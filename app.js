const averageCalculatorForm = document.querySelector('.average-calculator-form')
const res = document.querySelector('.res')

averageCalculatorForm.addEventListener('submit', event => {
  event.preventDefault()

  const studentName = averageCalculatorForm.name.value

  const subjects = averageCalculatorForm.subjects.value

  const referenceYear = averageCalculatorForm.year.value
  

  const grades = [
    Number(averageCalculatorForm.nota1.value),
    Number(averageCalculatorForm.nota2.value),
    Number(averageCalculatorForm.nota3.value),
    Number(averageCalculatorForm.nota4.value)
  ]

  const totalGrades = grades.reduce((acc, grade) => acc + grade, 0) / 4


  res.innerHTML = `
   <p>aluno nome: ${studentName}</p>
   <p>matéria de referência: ${subjects}</p>
   <p>ano de refêrencia: ${referenceYear}</p>
   <p>Media de ${studentName} : ${Math.round(totalGrades)}</p>
  `
})
