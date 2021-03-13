const valores = [7.7, 8.9, 6.3, 9.2]    //declaração virtual. Vírgula é o separador
console.log(valores[0], valores[3])
console.log(valores[4]) //acesso à um índice que não existe. Retorna undefined


valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //adiciona elementos no final de um array
console.log(valores)

console.log(valores.pop())      //retorna e retira o último elemento do array
delete valores[0]       //deleta o valor no índice fornecido
console.log(valores)

console.log(typeof valores) //arrays são do tipo objeto