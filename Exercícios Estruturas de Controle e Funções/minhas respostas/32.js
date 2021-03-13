function media(vetor) {
    let total = 0
    vetor.forEach(num => {
        total += num
    });
    const media = total/vetor.length
    return media
}

const vetor = [1, 5, 3, 2, 4]
console.log(media(vetor))