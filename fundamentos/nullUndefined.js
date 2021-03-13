let valor   //não incializada
console.log(valor)  //undefined

valor = null    //ausência de valor -- usar quando quiser zerar uma variável
console.log(valor)
//console.log(valor.toString()) //não é possível acessar valores de variáveis nulas

const produto = {}
console.log(produto.preco)  //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined   //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null    //sem preço
console.log(!!produto.preco)
console.log(produto)