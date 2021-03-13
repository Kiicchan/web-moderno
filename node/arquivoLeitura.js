const fs = require('fs') // módulo nativo: file system

const caminho = __dirname + '/arquivo.json' //__dirname é uma string q representa o diretório atual

// síncrono... Se for um arquivo grande, pode travar o event loop (indesejável)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)   // conteudo é um json

// assincrona...    // por ser assíncrono, foi executado depois
fs.readFile(caminho, 'utf-8', (err, conteudo) => {  // uma callback é chamada quando o arquivo é lido
    err === null ? console.log('Sem erro') : console.log('Com erro')
    const config = JSON.parse(conteudo) //transformando pra objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')    //no caso de arquivos .json, a leitura pode ser feita de forma 
console.log(config.db)                      //direta pelo require()

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})