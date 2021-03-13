const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)   // o forEach detecta um novo elemento (evento) => chama a função imprimir
fabricantes.forEach(fabricante => console.log(fabricante))