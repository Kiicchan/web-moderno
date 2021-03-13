function bissexto(ano) {
    if (ano % 4) {
        console.log(`${ano} não é ano bissexto`)
        return false
    } else if (ano % 100){
        console.log(`${ano} é ano bissexto`)
        return true
    } else if(ano % 400) {
        console.log(`${ano} não é ano bissexto`)
        return false
    } else {
        console.log(`${ano} é ano bissexto`)
        return true
    }
}

bissexto(1)
bissexto(4)
bissexto(100)
bissexto(400)
bissexto(800)
bissexto(2020)
bissexto(2021)