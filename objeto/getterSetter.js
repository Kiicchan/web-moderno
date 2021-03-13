const sequencia = {
    _valor: 1, // convenção! Os programadores respetiam este tipo de notificação
    get valor() { return this._valor++},    // o get e set permite que o método possuam o mesmo nome
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000  // útil quando se quer fazer uma verificação dos dados
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)