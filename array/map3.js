Array.prototype.map2 = function (callback) {
    const resultado = []
    for (let indice = 0; indice < this.length; indice++) {
        resultado.push(callback(this[indice], indice, this))        
    }
    return resultado
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Simulando o exercício 2 com implementação do método map:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)