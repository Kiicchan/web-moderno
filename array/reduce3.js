Array.prototype.reduce2 = function (callback, valorInicial) {
    let acumulador = this[0]
    let inicio = 1
    if (valorInicial) {
        acumulador = valorInicial
        inicio--
    }
    for (let i = inicio; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)        
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma, 10))