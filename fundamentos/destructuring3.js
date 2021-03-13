function rand({ min = 0, max = 1000}) {     //um objeto é o parâmetro da função. Dentro desse objeto, acessa-se min e max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
//console.log(rand())   //ERRO! tenta acessar um atributo de um objeto que não existe