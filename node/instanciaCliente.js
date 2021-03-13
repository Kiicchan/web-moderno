const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()  //Função Factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)    // apontam para o mesmo objeto (presente na memórica-cache)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)   // Objetos diferentes