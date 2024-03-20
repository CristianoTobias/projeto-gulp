const gulp = require('gulp');
const { compilaSass, comprimirJavascript, comprimirImagens } = require('./tarefas');

function monitorarArquivos() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, compilaSass);
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, comprimirJavascript);
    gulp.watch('./source/images/**/*', { ignoreInitial: false }, comprimirImagens);
}

exports.default = monitorarArquivos;
