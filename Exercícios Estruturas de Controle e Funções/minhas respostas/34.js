function compararCaracteres(string1, string2) {
    let str1 = string1.toLowerCase().split("").sort()
    let str2 = string2.toLowerCase().split("").sort()
    let resultado = false
    let ponteiro = 0
    for (let i = 0; i < str1.length; i++) {
        const num1 = str1[i];
        resultado = false
        for (let j = ponteiro; j < str2.length; j++) {
            const num2 = str2[j];
            if (num1 == num2) {
                resultado = true
                ponteiro = j
                break
            }
        }
        if (!resultado) {
            break
        }
    }
    if (str1.pop() !== str2.pop()) {
        resultado = false
    }
    return resultado
}

console.log(compararCaracteres("CBAS", "cvAs")) //false
console.log(compararCaracteres("CBAS", "cbAs")) //true
console.log(compararCaracteres("CBASt", "cbAs")) //false
console.log(compararCaracteres("CBAS", "cbAst")) //false
console.log(compararCaracteres("AAAA", "ABBB")) //false
console.log(compararCaracteres("ABBB", "AAAA")) //false
console.log(compararCaracteres("AAA", "AAAAA")) //true
console.log(compararCaracteres("AAAAA", "AAA")) //true
console.log(compararCaracteres("AAAAAA", "AAAB")) //false