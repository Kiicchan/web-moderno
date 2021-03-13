function progressaoAritmetica(n, a1, r) {
    let progressao = [a1]
    let soma = a1
    for (let i = 0; i < n - 1; i++) {
        const novoNum = progressao[i] + r
        progressao.push(novoNum)
        soma += novoNum      
    }
    console.log(progressao)
    console.log(soma)
}
progressaoAritmetica(5, 1, 2)

function progressaoGeometrica(n, a1, r) {
    let progressao = [a1]
    let soma = a1
    for (let i = 0; i < n - 1; i++) {
        const novoNum = progressao[i] * r
        progressao.push(novoNum)
        soma += novoNum      
    }
    console.log(progressao)
    console.log(soma)
}
progressaoGeometrica(5, 1, 2)