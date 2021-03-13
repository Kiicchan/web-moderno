const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))    //isInteger() é um método para verificar se um número é inteiro
console.log(Number.isInteger(peso2))    //retorna falso pq é ponto flutuante

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))   //toFixed() é um método para limitar as casas decimais de um número de ponto flutuante
console.log(media.toString())   //toString() é um método que retorna o valor numérico em string
console.log(media.toString(2))  //toString(2) retorna o valor binário em string
console.log(typeof media)       //um tipo number possui vários métodos associados
console.log(typeof Number)      //Number é uma FUNÇÃO