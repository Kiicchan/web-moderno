require('./global') // não precisa nem ter exportado

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Caso não seja feito o freeze(), o objeto poderia ser modificado por qualquer módulo
console.log(MinhaApp.nome)