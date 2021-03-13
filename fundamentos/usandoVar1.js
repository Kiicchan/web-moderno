{
    {
        {
            { 
                var sera = 'Será???'        //declarado nesse escopo
                console.log(sera)
            }
        }
    }
}
console.log(sera)   //Visível fora do bloco

function teste() {
    var local = 123     //quando var é declarado dentro de uma função, ela é visível apenas ali
    console.log(local)
}

teste()
//console.log(local)  //ERRO! não enxerga a variável "local"

//var só possui dois escopos possíveis: global, ou local dentro de uma função