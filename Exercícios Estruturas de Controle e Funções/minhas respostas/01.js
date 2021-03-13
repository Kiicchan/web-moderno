function operacoes(a, b) {
    const soma = a + b
    const subt = a - b
    const mult = a * b
    const div = a / b
    console.log('Parâmetros:', a,'e', b)
    console.log(`soma: ${soma}`)
    console.log(`subtração: ${subt}`)
    console.log(`multiplicação: ${mult}`)
    console.log(`divisão: ${div}`)
}

operacoes(5, 2)