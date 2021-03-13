function criarProduto(nome = '', preco = 0) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const prod1 = criarProduto('iMiku', 2199.99)
const prod2 = criarProduto('Notebook', 1199.49)
console.log(prod1)
console.log(prod2)