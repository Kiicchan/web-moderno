const _ = require('lodash') // procura um index.js dentro da pasta lodash em node_modules que foi instalada a partir do comando "npm i lodash" no terminal
setInterval(() => console.log(_.random(1, 1000)), 2000)