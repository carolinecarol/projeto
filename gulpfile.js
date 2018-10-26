const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('concatenar', () => {
    return gulp.src([
        'js/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('recarregar', () => {
    browserSync.init({server: './'});
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('observar', () => {
    //executa a tarefa concatenar.js quando ocorrem modificações no arquivo scripts.js
    gulp.watch(['js/*.js'], ['concatenar']);
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['index.html', 'css/main.css', 'dist/bundle.js'], browserSync.reload);
});

gulp.task('default', ['sass', 'concatenar', 'recarregar', 'observar']);