function ClassificarNota(nota) {
    const resto = 5 - nota % 5
    let newNota = nota
    if (resto < 3) {
        newNota += resto
    }
    if (newNota < 40) {
        console.log(`Aluno reprovado com nota ${nota}`)
    } else {
        console.log(`Aluno aprovado com nota ${newNota}`)
    }
}

ClassificarNota(27)
ClassificarNota(38)
ClassificarNota(89)