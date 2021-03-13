function revenderCarro(carro) {
    switch (carro) {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza que não prefere esse modelo?")
            break;
        default:
            console.log("Não trabalhamos com este tipo de modelo aqui")
            break;
    }
}

revenderCarro("hatch")
revenderCarro("sedan")
revenderCarro("motocicleta")
revenderCarro("caminhonete")
revenderCarro("barco")