function multiplicaVetor(vetor, fator) {
    let resultado = []
    vetor.forEach(num => {
        resultado.push(num * fator)
    });
    return resultado
}

function multiplicaVetor5(vetor, fator) {
    let resultado = []
    if (fator > 5) {
        for (const index in vetor) {
            resultado.push(vetor[index] * fator)
        }
    } else {
        for (const index in vetor) {
            resultado.push(vetor[index])
        }
    }
    return resultado
}
const vetor = [1, 2, 3, 4]
console.log(multiplicaVetor(vetor, 2))
console.log(multiplicaVetor5(vetor, 2))
console.log(multiplicaVetor5(vetor, 10))