const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com apenas os preços
const resultado = carrinho.map(function (json) {
    const obj = JSON.parse(json)
    return obj.preco
})
console.log(resultado)

// Com encadeamento:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)