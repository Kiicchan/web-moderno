function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj) {
    try {       //bloco complicado que pode surgir um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {   //quando ocorre erro, cai no catch
        tratarErroELancar(e)
    } finally {     //bloco executado com ou sem erro
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)