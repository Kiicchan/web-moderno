const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Pré desafio: calcular o array de bolsistas
const bolsas = alunos.map(a => a.bolsista)

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = function (acumulador, atual) {
    return acumulador && atual
}
console.log(bolsas.reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const umBolsista = function (acumulador, atual) {
    return acumulador || atual
}
console.log(bolsas.reduce(umBolsista))