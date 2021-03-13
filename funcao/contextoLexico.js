const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()  // A função age de acordo com o local onde foi declarada