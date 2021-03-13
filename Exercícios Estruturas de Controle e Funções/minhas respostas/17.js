function aumentoSalario(salario, plano) {
    switch (plano) {
        case 'A':
            return salario*1.1
            break;
        case 'B':
            return salario*1.15
            break;
        case 'C':
            return salario*1.2
            break;
        default:
            return "Plano Inválido"
            break;
    }
}

console.log(aumentoSalario(2000, 'A'))
console.log(aumentoSalario(1000, 'B'))
console.log(aumentoSalario(3000, 'C'))
console.log(aumentoSalario(1000, 'D'))