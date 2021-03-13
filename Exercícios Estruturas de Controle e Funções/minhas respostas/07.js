function bhaskara(a, b, c) {
    const delta = b ** 2 - 4*a*c
    if (delta < 0) {
        return 'Delta é negativo'
    } else if (delta == 0) {
        const x = (-b + Math.sqrt(delta))/(2*a)
        return [x, x]
    } else {
        const x1 = (-b + Math.sqrt(delta))/(2*a)
        const x2 = (-b - Math.sqrt(delta))/(2*a)
        return [x1, x2]
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))