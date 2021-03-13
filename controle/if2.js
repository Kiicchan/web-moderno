function teste1(num) {
    if(num > 7)
        console.log(num)    //única sentença associada ao IF
    
    console.log('Final')    //não é considerado pro IF
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7);   // o ; é uma sentença de código vazia, que está associada ao IF.
    
    {
        console.log(num)    //o bloco não está associado ao IF
    }
}

teste2(6)
teste2(8)