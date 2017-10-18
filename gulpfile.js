const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const gulp = require('gulp')
const autoprefixer = require('autoprefixer')

gulp.task('css', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    .pipe(gulp.dest('./dest'))
})

gulp.task('css:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass'])
})
