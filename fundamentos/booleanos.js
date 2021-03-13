let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1     //o valor numérico 1 é considerado verdadeiro
console.log(!!isAtivo)   //usando a negação duas vezes para exibir bool (não não 1)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')   //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(('' || null || 0 || 'epa')) //retorna o primeiro valor verdadeiro que encontrar


let nome = 'Lucas'
console.log(nome || 'Desconhecido') //pode retornar o nome ou Desconhecido se estiver vazio