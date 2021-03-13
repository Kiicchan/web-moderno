const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break   //o break não age sobre o bloco if. Interrompe o laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue    //interrompe a repetição atual
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo //quebra do laço mais externo através de um rótulo
        console.log(`Par = ${nums[a]}, ${nums[b]}`)
    }
}

console.log('Fim!')