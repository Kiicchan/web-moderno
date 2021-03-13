function impares(inicio = 0, fim = 100) {
    if (fim >= inicio) {
        for (let i = inicio + 1; i < fim; i++){
            if (i%2) {
                console.log(i)
            }           
        }
    } else {
        impares(fim, inicio)
    }
}

impares(13, 105)
impares(105, 13)
impares()
impares(200)