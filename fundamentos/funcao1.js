//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // os parâmetros não passados são tratados como underfined
imprimirSoma(2, 10, 4, 5, 6) // pode passar mais parâmetros, ele pega os dois primeiros e despreza o resto
imprimirSoma()  // NaN

//função com retorno
function soma(a, b = 0) {   //b = 0 define um valor padrão para o parâmetro caso ele não seja passado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))    //considera b = 0
console.log(soma())     // NaN , o primeiro parâmetro não foi tratado