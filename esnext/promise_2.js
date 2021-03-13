
// setTimeout(function () {        //callback hell
//     console.log('Executando callback...')

//     setTimeout(function () {
//         console.log('Executando callback...')
        
//         setTimeout(function () {
//             console.log('Executando callback...')            
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        console.log('Na hora')
        setTimeout(function () {
            console.log('Executando promisse...')
            resolve('Vishss')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
