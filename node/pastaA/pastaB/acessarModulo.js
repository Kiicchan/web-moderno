const moduloA = require('../../moduloA') //usar sempre o nome correto do arquivo (respeitando maiúsculas e minúsculas)
console.log(moduloA.ola)

const saudacao = require('saudacao') // Sem o ./ ele procura dentro da pasta node_modules pela pasta "saudacao" e executa o arquivo de nome index.js
console.log(saudacao.ola)

const c = require('./pastaC') // Pode omitir o nome do módulo se o módulo a ser requisitado for o index.js
console.log(c.ola2)

//const http = require('http')  //requerindo um módulo do próprio node
//http.createServer((req, res) => {
//    res.write('Bom dia!')
//    res.end()
//}).listen(8080)