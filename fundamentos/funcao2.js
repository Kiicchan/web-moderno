// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {  //sem o nome. Função anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenado uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b   //quando o corpo da função não existe (sem chaves {}), a função admite um retorno
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)   //ainda mais reduzido
imprimir2('Legal!!!')