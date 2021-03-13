function mediaEscolar(codigo, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]    
    notas.sort()
    const media = (notas[2] * 4 + notas[1] * 3 + notas[0] * 3) / 10
    if (media >= 5) {
        return `Aluno com código ${codigo} APROVADO com notas ${nota1}, ${nota2}, ${nota3} e média ${media}`
    } else {
        return `Aluno com código ${codigo} REPROVADO com notas ${nota1}, ${nota2}, ${nota3} e média ${media}`
    }
}

console.log(mediaEscolar(1432, 5, 8, 2))