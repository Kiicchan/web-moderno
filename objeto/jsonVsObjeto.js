const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c } }
console.log(JSON.stringify(obj))    // Não aceita funções! É um formato de dados!

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))   //ERRO! Formato não é JSON
//console.log(JSON.parse("{ 'a': 1, 'b', 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))   //Formato válido = apenas aspas duplas!
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))    //Formato válido