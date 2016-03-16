var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function(){
  return gulp.src('src/less/*.less')
    .pepe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build'));
});

gulp.watch('src/less/*.less', ['less']);

gulp.task('default', ['less']);

