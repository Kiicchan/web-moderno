function notasConceitos(notas) {
    let conceitos = []
    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota >= 0 && nota <= 10) {
            if (nota < 5) {
                conceitos.push("D")
            } else if (nota < 7) {
                conceitos.push("C")
            } else if (nota < 9) {
                conceitos.push("B")
            } else {
                conceitos.push("A")
            }
        } else {
            conceitos.push("Nota fora do intervalo")
        }
    }
    return conceitos
}

const notas = [-5.4, 4, 8, 10, 11]
const conceitos = notasConceitos(notas)
console.log(notas, conceitos)