const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigma funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa) // pessoa sempre será referenciado para chamar o this nessa instância
falarDePessoa()