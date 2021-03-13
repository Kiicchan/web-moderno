console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = { // não adianta criar um objeto e atribuir a exports, pois ele não será exportado!!
    nome: 'Teste'
}

console.log(module.exports)