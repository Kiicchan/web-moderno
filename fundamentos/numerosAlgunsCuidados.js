console.log(7/0)    //O JS retorna o valor Infinito. Infinito é do tipo number
console.log("10" / 2)   //O JS interpreta o valor 10 em string como um número, converte e usa-o
console.log("10,2" / 2) //Se houver algo que não é convertível (a vírgula), o valor retornado será NaN (not a number)
console.log("Show!!" * 2) //NaN
console.log(0.1 + 0.7)  //O JS não suporta essa precisão por conta da especificação da operação do tipo ponto flutuante
//console.log(10.toString()) // o JS não interpreta o literal
console.log((10.345).toFixed(2))    //Isso dá O.O Dá pra chamar o literal dentro de parênteses
console.log('3' + 2)    //Vai concatenar! A concatenação tem precedência
console.log('3'- 1) //Aqui vai subtrair!