function Recordes(pontuacao) {
    let lista = pontuacao.split(' ')
    let melhor = Number(lista[0])
    let pior = Number(lista[0])
    let recordes = 0
    let piorDia = 1
    for (let p = 1; p < lista.length; p++) {
        if (lista[p] > melhor) {
            melhor = Number(lista[p])
            recordes++
        } else if (lista[p] < pior) {
            pior = Number(lista[p])
            piorDia = p + 1
        }
    }
    return [recordes, piorDia]
}
const Jogos = "10 20 20 8 25 3 0 30 1"
console.log(Recordes(Jogos))