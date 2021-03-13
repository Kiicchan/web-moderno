const nome = 'Rebeca'
const concatenaçao = 'Olá' + nome + '!'     //concatenação normal
const template = `
    Olá
    ${nome}!`   //O template string suporta quebras de linha
console.log(concatenaçao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)


const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)