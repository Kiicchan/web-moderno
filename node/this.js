console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)    //Dentro de uma função, this aponta para o objeto global

    this.perigo = '...' ///Isso está adicionando algo ao objeto GLOBAL!!
}

logThis()