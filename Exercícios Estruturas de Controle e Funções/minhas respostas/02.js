function classificarTriangulo(a, b, c) {
    if (a == b && b == c) {
        return 'Equilátero'
    } else if (a == b || b == c || c == a) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(10, 20, 30))
console.log(classificarTriangulo(10, 10, 20))
console.log(classificarTriangulo(10, 10, 10))