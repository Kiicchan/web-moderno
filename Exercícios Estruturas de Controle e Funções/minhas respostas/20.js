function saque(valor) {
    const cedulas = [100, 50, 10, 5, 1]
    let qtd = []
    let restante = valor
    for (let i = 0; i < cedulas.length; i++) {
        const cel = cedulas[i];
        qtd.push(Math.floor(restante/cel))
        restante = restante - cel*qtd[i]
    }
    let resultado = ''
    for (let i = 0; i < qtd.length; i++) {
        const notas = qtd[i];
        if (notas) {
            resultado += `${notas} nota(s) de R$ ${cedulas[i]}. `
        }
    }
    console.log(resultado)
}
saque(18)
saque(153)