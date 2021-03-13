import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//import Saudacao from './componentes/Saudacao'
//import Multi, { BoaNoite } from './componentes/Multiplos'
//import BomDia from './componentes/BomDia'
//import Primeiro from './componentes/Primeiro'   //o componente deve ser importado com letra maiúscula (o nome do arquivo não precisa ser maiúsculo)
//const elemento = <h1>React 2</h1> // JSX : será feito um transpile automaticamente
//$('<h1>').html('React 2')

//ReactDOM.render(<BomDia nome="Guilherme" idade={10} />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Passar filhos direto na chamada */}
            <Filho nome="Pedro" ></Filho>
            <Filho nome="Paulo" ></Filho>
            <Filho nome="Carla" ></Filho>
        </Pai>
    </div>
, document.getElementById('root'))