const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = funcionario => funcionario.genero === 'F'
const chineses = funcionario => funcionario.pais === 'China'
const menorSalario = (anterior, atual) => {
    return anterior.salario > atual.salario ? atual : anterior
}
//console.log('Nodemon funcionando')
axios.get(url).then(response => {
    const funcionarios = response.data    
    const funcionarioRequisitado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(funcionarioRequisitado)
})