const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

//método filter() recebe uma função callback(valor, índice, array) que retorna true ou falso.
// o resultado da callback define se o elemento estará presente no array resultante
console.log(produtos.filter(function (p) {
    return false
}))

const caro = function (produto) {
    return produto.preco >= 500
}

const fragil = function (produto) {
    return produto.fragil
}

const produtosFragilECaro = produtos.filter(caro).filter(fragil)
console.log(produtosFragilECaro)