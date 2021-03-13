import React, { Component } from 'react'

export default class Saudacao extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        this.setTipo = this.setTipo.bind(this)  //outra maneira, usando bind
    }

    setTipo(e) {    //Função disparada quando ocorrer o evento onChange
        this.setState({ tipo: e.target.value }) //atualização do estado (dados) do componente
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}