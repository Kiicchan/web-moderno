let numero = 1
{
    let numero = 2  // escopo interno
    console.log('dentro =', numero)
}
console.log('fora =', numero)

//let possui escopo global, de função e de bloco