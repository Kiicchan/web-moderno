console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {    //reverse() não é um método existente em String, mas é em Array
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {   //EVITAR mexer em métodos que já existem!
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())   //Efeito colateral por conta da mudança em toString