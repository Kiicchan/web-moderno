const prod1 = {}        //declaração literal. Um Objeto é um conjunto de chaves e valores
prod1.nome = 'Celular Ultra Mega'   //passagem de atributos
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //permite uma chave com espaços, mas é bom evitar

console.log(prod1)

const prod2 = {     //declaração com atributos
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{       //estrutura aninhada de objetos
        blabla: 1,
        obj: {  //o nome da chave precisa apenas ser único para aquele objeto
            blabla: 2
        }
    }
}

console.log(prod2)