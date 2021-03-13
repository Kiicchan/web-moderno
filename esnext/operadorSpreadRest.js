// operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetros de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.99 }
const clone = { ativo: true, ...funcionario}    // colocando todos os atributos de funcionário em clone
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)