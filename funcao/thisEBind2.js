function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        /*this.idade++*/ self.idade++
        /*console.log(this.idade)*/ console.log(self.idade)
    }/*.bind(this)*/, 1000) // sem o bind, a chamada da função é feita pelo  setInterval na instância new Pessoa
}

new Pessoa