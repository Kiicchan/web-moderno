function planoDeSaude(idade) {
    const valorBase = 100
    if (idade < 10) {
        return valorBase + 80
    } else if (idade < 30) {
        return valorBase + 50
    } else if (idade < 60) {
        return valorBase + 95
    } else {
        return valorBase + 130
    }
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(15))
console.log(planoDeSaude(59))
console.log(planoDeSaude(68))