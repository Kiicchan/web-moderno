const nums = [1, 2, 3, 4, 5]

// For com propósito. O map() retorna um array de mesmo tamanho do array original, com os valores transformados por uma callback function
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
// Maps encadeados:
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)