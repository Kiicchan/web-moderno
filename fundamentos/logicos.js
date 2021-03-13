function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)   //bitwise "ou exclusivo"
    const comprarTv32 = trabalho1 != trabalho2  //A diferença simula um "ou exclusivo"
    const manterSaudavel = !comprarSorvete  //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}  //quando se omite o nome do atributo, ele considera o nome da variável
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))