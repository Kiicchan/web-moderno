const escola = "Cod3r"
console.log(escola.charAt(4))   //charAt é um método que retorna o caracter da posição 4 (começando em 0)
//console.log(escola.charAt(5))   //Retorna vazio
console.log(escola.charCodeAt(3))   //Código unicode html
console.log(escola.indexOf('3'))

console.log(escola.substring(1))    //Retorna uma string a partir do índice 1
console.log(escola.substring(1, 3)) //índice inicial e final

console.log('Escola '.concat(escola).concat("!"))   //função de concatenação. Pode usar a partir de um literal
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e')) //para trocar o valor indicado pelo fornecido
console.log(escola.replace(/\d/, 'e'))  //funciona com expressões regulares "regex"

console.log('Ana,Maria,Pedro'.split(','))   //Separa a string em strings menores e os coloca em array