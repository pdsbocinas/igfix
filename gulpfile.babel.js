var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var source = 'src/';
var dest = 'web/';

var bootstrapSass = {
  in: './node_modules/bootstrap-sass/'
};

var fonts = {
  in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
  out: dest + 'fonts/'
};

var bootstrapJs = {
  in: [source + 'assets/js/*.*', bootstrapSass.in + 'assets/javascripts/**/*'],
  out: dest + 'js/',
  watch: source + 'js/**/*'
};

var scss = {
  in: source + '/assets/scss/app.scss',
  out: dest + 'css/',
  watch: source + 'scss/**/*',
  sassOpts: {
    outputStyle: 'nested',
    precison: 3,
    errLogToConsole: true,
    includePaths: [bootstrapSass.in + 'assets/stylesheets']
  }
};

gulp.task('fonts', function () {
    return gulp
      .src(fonts.in)
      .pipe(gulp.dest(fonts.out));
});

gulp.task('sass', ['fonts'], function () {
    return gulp.src(scss.in)
      .pipe(sass(scss.sassOpts))
      .pipe(gulp.dest(scss.out));
});

gulp.task('js', function () {
    return gulp.src(bootstrapJs.in)
      .pipe(babel({
        "presets": ["es2015"]
      }))
      .pipe(concat('all.js'))
      .pipe(gulp.dest(bootstrapJs.out));
});

gulp.task('default', ['sass','js'], function () {
     gulp.watch(scss.watch, ['sass','js']);
});
