# Gulp example

```js
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const gulp = require('gulp')
const autoprefixer = require('autoprefixer')

/**
 * `css` 태스크; `gulp css`를 통해 실행시킬 수 있다.
 */
gulp.task('css', function () {
  // `./styles/**/*.scss`에 매칭되는 모든 파일을 읽어온다.
  return gulp.src('./styles/**/*.scss')
    // scss 파일이면 css로 바꾸어주고, css파일은 그냥 넘겨준다.
    .pipe(sass().on('error', sass.logError))
    // 넘겨받은 css파일을 postcss로 넘겨주어 타겟 브라우저에 맞춰 prefix를 붙여준다.
    .pipe(postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    // 가공된 모든 파일들을 `./dest`로 넘겨준다.
    .pipe(gulp.dest('./dest'))
})

//
//`./styles/**/*.scss` 에 매칭되는 파일이 바뀌면 css task를 실행
gulp.task('css:watch', function () {
  gulp.watch('./styles/**/*.scss', ['css'])
})
```