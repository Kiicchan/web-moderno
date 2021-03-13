function negativo(vetor) {
    let negativos = 0
    vetor.forEach(num => {
        if (num < 0) {
            negativos++
        }
    });
    return negativos
}

const vetor = [1, 0. -1, -3, 5]
console.log("possui", negativo(vetor), "números negativos")