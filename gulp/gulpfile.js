const gulp = require('gulp'); // Подключаем Gulp
const concat = require('gulp-concat'); // Объединение файлов
const autoprefixer = require('gulp-autoprefixer'); // Добапвление префиксов
const cleancss = require('gulp-clean-css'); // Оптимизация стилей
const uglify = require('gulp-uglify'); // Оптимизация скриптов
const del = require('del'); // Удаление файлов
const browserSync = require('browser-sync').create(); // Синхронизация с браузером
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps'); // Создает карту для препроцессоров стилей
const sass = require('gulp-sass'); // Sass препроцессор
// const less = require('gulp-less'); // Less препроцессор
// const stylus = require('gulp-stylus'); // Stylus препроцессор
const babel = require('gulp-babel');
const rename = require('gulp-rename'); // Модуль переименовывания файлов
const pug = require('gulp-pug');

// Порядок подключения файлов html
const htmlFiles = [
  '../src/index.html',
];

// Порядок подключения файлов pug
const pugFiles = [
  '../src/pug/*.pug',
];

// Порядок подключения файлов со стилями
const styleFiles = [
  '../src/styles/style.sass',
];

// Порядок подключения js файлов
const scriptFiles = [
  '../src/js/*.js',
];

// Таск для обработки pug
gulp.task('pug2html', () => gulp.src(pugFiles)
  .pipe(pug({
    pretty: true,
  }))
  .pipe(gulp.dest('../build'))
  .pipe(browserSync.stream()));

// Таск для обработки html
gulp.task('html', () => gulp.src(htmlFiles)
  .pipe(gulp.dest('../build'))
  .pipe(browserSync.stream()));

// Таск для обработки стилей
gulp.task('styles', () => gulp.src(styleFiles)
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expand' }).on('error', notify.onError()))
  .pipe(autoprefixer(['>0.2%', 'not dead', 'not op_mini all']))
  .pipe(cleancss({
    level: {
      2: {
        all: true,
        removeUnusedAtRules: false,
        restructureRules: false,
      },
    },
  })) // Opt., comment out when debugging
  .pipe(sourcemaps.write())
  .pipe(rename({
    suffix: '.min',
  }))
  // Выходная папка для стилей
  .pipe(gulp.dest('../build/css'))
  .pipe(browserSync.stream()));

// Таск для обработки скриптов
gulp.task('scripts', () => gulp.src(scriptFiles)
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/preset-env'],
  }))
  .pipe(concat('scripts.min.js'))
  .pipe(uglify()) // Mifify js (opt.)
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('../build/js'))
  .pipe(browserSync.stream()));

// Таск для очистки папки build
gulp.task('del', () => del([
  '../build/*',
],
{ force: true }));

// Перемещение изображений
gulp.task('images', () => gulp.src('../src/images/**/*.{png,jpg}')
  .pipe(gulp.dest('../build/images')));

// Таск для отслеживания изменений в файлах
gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: '../build/',
    },
  });
  // Следить за файлами со стилями с нужным расширением
  gulp.watch('../src/styles/**/*.sass', gulp.series('styles'));
  // Следить за JS файлами
  gulp.watch('../src/js/**/*.js', gulp.series('scripts'));
  // При изменении HTML запустить синхронизацию
  gulp.watch('../src/*.html').on('change', browserSync.reload);
  // При изменении HTML запустить синхронизацию
  gulp.watch('../src/pug/**/*.pug', gulp.series('pug2html'));
  // При изменении images запустить синхронизацию
  gulp.watch('../src/images/**/*.{png,jpg}', gulp.series('images'));
});

// Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task('default', gulp.series('del', gulp.parallel('pug2html', 'styles', 'scripts', 'images'), 'watch'));
