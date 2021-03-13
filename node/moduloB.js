// Forma mais clássica: através da redefinição do objeto module.exports
module.exports = {  //só pode usar a estratégia do objeto com o module.exports
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}