function calcularLanche(cod, qtd) {
    switch (cod) {
        case 100:
            console.log (`Comprando ${qtd} Cachorros Quentes`)
            return qtd * 3
            break;
        case 200:
            console.log (`Comprando ${qtd} Hambúrguer Simples`)
            return qtd * 4
            break;
        case 300:
            console.log (`Comprando ${qtd} Cheeseburguers`)
            return qtd * 5.50
            break;
        case 400:
            console.log (`Comprando ${qtd} Baurus`)
            return qtd * 7.50
            break;
        case 500:
            console.log (`Comprando ${qtd} Refrigerantes`)
            return qtd * 3.50
            break;
        case 600:
            console.log (`Comprando ${qtd} Sucos`)
            return qtd * 2.80
            break;
        default:
            return "ERRO, Lanche inexistente"
            break;
    }
}

console.log(calcularLanche(100, 2))
console.log(calcularLanche(200, 2))
console.log(calcularLanche(300, 2))
console.log(calcularLanche(400, 2))
console.log(calcularLanche(500, 2))
console.log(calcularLanche(600, 2))
console.log(calcularLanche(700, 2))