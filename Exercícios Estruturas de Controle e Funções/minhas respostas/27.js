function calcularTempo(altura, taxa) {
    return -altura / taxa
}

function calcularCrianca(altura1, taxa1, altura2, taxa2) {
    let resultado = ''
    let deltaAlt = altura1 - altura2
    let deltaTaxa = taxa1 - taxa2
    let menorCrianca = 0
    if (deltaAlt) {
        if (deltaAlt > 0) {
            menorCrianca = 2
            resultado += "A criança 1 é maior. "
        } else {
            resultado += "A criança 2 é maior. "
            menorCrianca = 1
        }
        if (deltaTaxa) {
            const tempo = calcularTempo(deltaAlt, deltaTaxa)
            if (tempo > 0) {
                resultado += `A criança ${menorCrianca} será maior em ${tempo.toFixed(2)} anos. `
            } else {
                resultado += `A criança ${menorCrianca} nunca será maior. `
            }
        } else {
            resultado += "As duas crianças possuem a mesma taxa de crescimento. "
            resultado += `A criança ${menorCrianca} nunca será maior que a outra. `
        }
    } else {
        resultado += "As duas crianças possuem a mesma altura. "
        if (deltaTaxa) {
            if (deltaTaxa > 0) {
                resultado += "A criança 1 será mais alta em 1 ano. "
            } else {
                resultado += "A criança 2 será mais alta em 1 ano. "
            }
        } else {
            resultado += "Elas crescem por igual. "
        }
    }
    console.log(resultado)
}

calcularCrianca(100, 2, 105, 5)
calcularCrianca(105, 2, 100, 5)
calcularCrianca(100, 2, 100, 5)
calcularCrianca(105, 2, 100, 2)
calcularCrianca(100, 2, 100, 2)
calcularCrianca(105, 5, 100, 2)
calcularCrianca(100, 5, 105, 2)