function Dinheiro(quantia) {
    let resp = quantia.toFixed(2).toString().replace('.', ',')
    return 'R$' + resp
}

console.log(Dinheiro(0.2 + 0.3))