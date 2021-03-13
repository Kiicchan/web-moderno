const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {   // Definição do workflow, passando como parâmetro uma callback (que o gulp utilizará para saber que o processo terminou)
    gulp.src('src/**/*.js') // selecionando os arquivos que vão passar pela transformação (qualquer arquivo .js que estiver no diretório)
        .pipe(babel({   // usando o babel passando um objeto de configuração
            comments: false,   // retirar os comentários do código
            presets: ["env"]    // utilizar a mais nova versão do JS
        }))
        .pipe(uglify()) // usando o uglify para retirar todos os espaços do código
        .on('error', err => console.log(err)) //    exemplo de tratamento de erro com o .on
        .pipe(concat('codigo.min.js')) // Usando o concat para unir todos os arquivos em apenas um, passando como parâmetro o nome do arquivo gerado
        .pipe(gulp.dest('build')) // Destino do arquivo final, informando a pasta build
    return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)    // exportando a função para ser usada externamente pelo gulp no node