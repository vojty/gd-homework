import gulp from 'gulp';
import gulpBg from 'gulp-bg';
import gulpEslint from 'gulp-eslint';
import mocha from 'mocha';
import webpackBuild from './webpack/build';

gulp.task('webpack-server', gulpBg('node', './webpack/server'));
gulp.task('web-server', gulpBg('node', './server'));

gulp.task('set-dev-env', () => {
  process.env.NODE_ENV = 'development';
});


gulp.task('tests', ['eslint', 'mocha']);

gulp.task('build', webpackBuild);

gulp.task('default', ['set-dev-env', 'web-server', 'webpack-server']);

gulp.task('mocha', () => {
  gulp.src('test/**/*.js', { read: false })
      .pipe(mocha({
        reporter: 'spec',
        require: ['./test/testHelpers.js'],
      }));
});

gulp.task('eslint', () => {
  const g = gulp.src([
    'gulpfile.babel.js',
    'src/**/*.js',
    'test/**/*.js',
    'webpack/**/*.js',
  ]).pipe(gulpEslint())
    .pipe(gulpEslint.format());
  return g;
});
