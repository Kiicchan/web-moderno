const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

imprimirResultado('Epa!')   //a expressão (Epa! >= 7) retorna falso. Cuidado com os tipos!