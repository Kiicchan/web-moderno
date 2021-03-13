function frutaria(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não vendemos essa fruta aqui"
            break;
        case "kiwi":
            return "Estamos com falta de kiwi"
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
            break;
    
        default:
            return "Fruta inválida"
            break;
    }
}

console.log(frutaria("maçã"))
console.log(frutaria("kiwi"))
console.log(frutaria("melancia"))
console.log(frutaria("abacate"))