function calcularAnuidade(mes, anuidade) {
    if (mes == 1) {
        return anuidade
    } else {
        return calcularAnuidade(mes - 1, anuidade * 1.05)
    }
}

console.log(calcularAnuidade(8, 100).toFixed(2))