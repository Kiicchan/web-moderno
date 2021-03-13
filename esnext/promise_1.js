let a = 1
console.log(a) // síncrono

let p = new Promise( function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])  //parâmetro único
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)    // o retorno de um then é parâmetro para o próximo