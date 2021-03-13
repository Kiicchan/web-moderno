console.log(soma(3, 4)) // Há o içamento da function declaration
// console.log(sub(3, 4)) // A function expression não pode ser chamada antes de sua declaração
// console.log(mult(3, 4))  // O mesmo acontece para a named function expression
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression    //forma pouco usada. Pode ter benefícios durante a debugging
const mult = function mult(x, y) {
    return x * y
}