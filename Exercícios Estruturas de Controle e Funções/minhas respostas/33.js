const vetorInteiros = [1, 2, 3]
const vetorString = ["Um", "Dois", "Três"]
const vetorDecimais = [1.1, 2.2, 3.3]
let vetorTotal = vetorInteiros.concat(vetorString)
vetorTotal = vetorTotal.concat(vetorDecimais)
console.log(vetorTotal)