Array.prototype.forEach2 = function (callback) {
    for (let indice = 0; indice < this.length; indice++) {
        callback(this[indice], indice, this)
    }
}

const aprovados = ['Agatha', 'Aldo','Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})