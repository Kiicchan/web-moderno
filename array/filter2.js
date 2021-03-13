
Array.prototype.filter2 = function (callback) {
    const resultado = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultado.push(this[i])
        }      
    }
    return resultado
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

const produtosFragilECaro = produtos.filter2(caro).filter2(fragil)
console.log(produtosFragilECaro)