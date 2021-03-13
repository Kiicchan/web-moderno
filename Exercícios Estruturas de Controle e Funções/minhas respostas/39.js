let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]
console.log(vetorA, vetorB)
function troca(vetor1, vetor2) {
    for (let i = 0; i < vetor1.length; i++) {
        vetor1.push(vetor2.shift())
        vetor2.push(vetor1.shift())
    }
}

troca(vetorA, vetorB)
console.log(vetorA, vetorB)