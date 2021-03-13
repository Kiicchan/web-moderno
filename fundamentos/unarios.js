let num1 = 1
let num2 = 2

num1++  // forma pós fixada
console.log(num1)
--num1  // forma pré fixada. Possui precedência sobre a forma pós fixada
console.log(num1)

console.log(++num1 === num2--)  // num2 só é decrementado depois da comparação. No momento da comparação, eles são iguais
console.log(num1 === num2)  //neste momento, eles são diferentes