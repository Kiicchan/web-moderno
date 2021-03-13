function intervalo(vetor) {
    let sim = 0
    let nao = 0
    for (let i = 0; i < vetor.length; i++) {
        const num = vetor[i];
        if (num >= 10 && num <= 20) {
            sim++
        } else {
            nao++
        }
    }
    console.log(`${sim} números no intervalo [10, 20] e ${nao} fora`)
}

const vetor = [10, 11, 9, 23, 19, 14]
intervalo(vetor)