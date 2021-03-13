function maiorMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    vetor.forEach(num => {
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    });
    console.log(`O menor número é ${menor} e o maior é ${maior}`)
}

const vetor = [2, 5, 3, 1, 6, 7, 4]
maiorMenor(vetor)