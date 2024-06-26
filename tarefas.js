const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimirJavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function comprimirImagens() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

exports.compilaSass = compilaSass;
exports.comprimirJavascript = comprimirJavascript;
exports.comprimirImagens = comprimirImagens;
