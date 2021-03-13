function fatorial(num) {
    if (num) {
        return num * fatorial(num - 1)
    } else {
        return 1
    }
}

console.log(fatorial(10))