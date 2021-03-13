//const Pessoa = require('./pessoa')

import Pessoa from './pessoa' //Modo de importar usando webpack
import './modulos/moduloA' // a partir dessa chamada, é possível chegar no módulo B.
import './assets' // procura por padrão um arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())