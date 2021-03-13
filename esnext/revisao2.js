// Arrow Function
const soma = (a, b) => a + b    // return implícito
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // contexto léxico aponta para onde foi definida a função
const lexico2 = lexico1.bind({})    // não funciona
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador  rest
function total(...numeros) {
    let total = numeros.reduce((anterior, atual) => anterior + atual)
    return total
}
console.log(total(2, 3, 4, 5))