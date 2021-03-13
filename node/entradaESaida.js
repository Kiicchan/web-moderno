const anonimo = process.argv.indexOf('-a') !== -1   // Leitura de flag da chamada do node
//console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Saída padrão (standart output)
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {  //Entrada padrão
        const nome = data.toString().replace('\r\n', '')  // A entrada conta com o enter do usuário (pode ser removido)

        process.stdout.write(`Fala ${nome} !! \n`)
        //process.exit()
    })
}