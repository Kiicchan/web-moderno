const fs = require('fs')
const path = require('path')
const { resolve } = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function prometerDados(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const dados = prometerDados(caminho)
dados
    .then(data => data.toString())
    .then(dataString => dataString.split('\r\n'))
    .then(dataArray => console.log(dataArray))