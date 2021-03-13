const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()  // selecionando o source do projeto a partir do projeto de TypeScript
        .pipe(tsProject())  // usando o próprio projeto para transformar TS em JS
        .pipe(gulp.dest('build'))   // definindo a pasta de destino
}

exports.default = series(transformacaoTS)