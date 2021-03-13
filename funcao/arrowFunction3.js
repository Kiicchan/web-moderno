let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // referenciando o próprio módulo onde a função arrow foi definida

comparaComThisArrow = comparaComThisArrow.bind(obj) // o bind não funciona com arrow functions
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)