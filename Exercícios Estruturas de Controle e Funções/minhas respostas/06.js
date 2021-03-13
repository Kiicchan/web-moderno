function jurosSimples(capital, taxa, tempo) {
    return capital * (1 + taxa*tempo)
}

function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo)
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))