const pilotos = ['Vettle', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! (O método remove o último elemento e o devolve)
console.log(pilotos)

pilotos.push('Verstappen')  // Adiciona um elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos de um array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou novamente xD
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna um subarray que se inicia a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O primeiro índice entra, o último índice não entra ([índice 1, índice 2[)!!
console.log(algunsPilotos2)