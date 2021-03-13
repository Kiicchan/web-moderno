const funcs = []

for (let i = 0; i < 10; i++) {  //a variável tem "memória" de seu valor quando foi declarada
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()