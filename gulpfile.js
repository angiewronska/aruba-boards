const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-minify');
const del = require('del');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');

const config = {
  app: {
    js:     './app/js/*.js',
    scss:   './app/scss/*.scss',
    css:   './app/css/*.css',
    images: './app/img/**/*.*',
    html:   './app/*.html',
    parts:  './app/parts/*.html'
  },
  extra:{
    css: './app/css'
  },
  dist: {
    base:   './dist',
    images: './dist/img',
    css:    './dist/css',
    js:     './dist/js'
  }
}

// przeładowanie strony
function liveReload(done) {
  browserSync.init({
    server: {
       baseDir: config.dist.base
    },
  });
  done();
}
function reload (done) {
  browserSync.reload();
  done();
}
// obserwacja zmian w pliku HTML i łączenie z elementami
function htmlTask(done) {
  src(config.app.html)
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
  .pipe(dest(config.dist.base))
  done();
}

// scss
function scssTask(done) {
  src(config.app.scss)
    .pipe(scss().on('error', scss.logError))
    .pipe(dest(config.dist.css))
    .pipe(dest(config.extra.css))
  done();
};

// js
function jsTask(done) {
  src(config.app.js)
    .pipe(dest(config.dist.js))
  done();
}
// minifikacja obrazków
function imagesTask(done) {
    src(config.app.images)
      .pipe(changed(config.dist.base))
      .pipe(imagemin())
      .pipe(dest(config.dist.images))
    done();
}
// obserwacja zmian na plikach
function watchFiles(done) {
  watch(config.app.html,series(htmlTask,reload));
  watch(config.app.parts,series(htmlTask,reload));
  watch(config.app.scss, series(scssTask,reload));
  watch(config.app.js, series(jsTask,reload));
  watch(config.app.images, series(imagesTask,reload));
  done();
}

// czyści folder dist przed generowaniem nowego foldera
function cleanUp() {
    return del([config.dist.base]);
}


// task przydatny do konfiguracji LP na CMS De'Longhi
// Trzeba odkomentować  replace
function htmlPathTask(done) {
  src(config.app.html)
  // .pipe(replace('img/','newpath/'))
  .pipe(dest(config.dist.base))
  done();
}

function cssPathTask(done) {
  src(config.app.css)
  .pipe(concat('main.css'))
  .pipe(cleanCSS())
  // .pipe(replace('../img/','newpath/'))
  .pipe(dest(config.dist.css))
  done();
}

function jsPathTask(done) {
  src(config.app.js)
  // .pipe(replace('../img/','newpath/'))
  .pipe(uglify())
  .pipe(dest(config.dist.js))
  done();
}



exports.default = parallel(htmlTask, scssTask, jsTask, imagesTask, watchFiles, liveReload);
exports.prod = series(cleanUp, parallel(jsTask, scssTask, imagesTask, htmlTask), htmlPathTask, cssPathTask, jsPathTask);
