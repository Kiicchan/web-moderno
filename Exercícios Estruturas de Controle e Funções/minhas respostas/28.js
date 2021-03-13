function paresImpares(vetor) {
    let impar = 0
    let par = 0
    vetor.forEach(num => {
        if (num%2) {
            impar++
        } else {
            par++
        }
    });
    console.log(`${impar} números ímpares e ${par} números pares`)
}

const vect = [1, 2, 3, 4, 5, 6]
paresImpares(vect)