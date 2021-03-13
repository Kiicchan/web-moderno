function calculadora(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
            break;
        case '-':
            return num1 - num2
            break;
        case '*':
            return num1 * num2
            break;
        case '/':
            return num1 / num2
            break;
        default:
            return "Operação inválida"
            break;
    }
}

console.log(calculadora(1, "+", 3))
console.log(calculadora(1, "-", 3))
console.log(calculadora(1, "*", 3))
console.log(calculadora(1, "/", 3))
console.log(calculadora(1, "^", 3))