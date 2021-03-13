function diaUtil(dia) {
    switch (dia) {
        case 1:
        case 7:
            console.log("Feriado")
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia útil")
            break;
        default:
            console.log("Dia inválido")
            break;
    }
}

for (let dia = 0; dia < 8; dia++) {
    diaUtil(dia)
}