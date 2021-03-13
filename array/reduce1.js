const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const notas = alunos.map(a => a.nota)
console.log(notas)
// O método reduce(callback, valorInicial) retorna um resultado baseado nas interações sucessivas com cada valor do array
// passando como valor Acumulador o resultado de cada iteração.
// A função callback recebe como parâmetros: acumulador, valorAtual, índice, array
// Se o valor inicial não for passado, ele será adimitido como igual ao primeiro valor do array

const resultado = notas.reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)