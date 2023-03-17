const fs = require('fs');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssGlobImport = require('postcss-import-ext-glob');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

const { rollup } = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

gulp.task('css', () =>
  gulp
    .src(['./src/assets/css/global.css'])
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssGlobImport(),
        postcssImport(),
        postcssNested(),
        postcssPresetEnv({
          stage: 2,
          features: {
            'nesting-rules': true,
          },
        }),
      ])
    )
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./web/assets/css'))
);

gulp.task('js', () => {
  return rollup({
    input: './src/assets/js/main.js',
    plugins: [
      nodeResolve(),
      babel({
        presets: [['@babel/preset-env']],
        babelHelpers: 'bundled',
      }),
    ],
  }).then((bundle) => {
    return bundle.write({
      file: './web/assets/js/main.js',
      format: 'cjs',
      name: 'main',
      sourcemap: true,
      compact: true,
    });
  });
});

gulp.task('fonts', () =>
  gulp.src(['./src/assets/fonts/*']).pipe(gulp.dest('./web/assets/fonts'))
);

gulp.task('images', () =>
  gulp.src(['./src/assets/img/**/*']).pipe(gulp.dest('./web/assets/img'))
);

gulp.task('watch', function () {
  gulp.task(
    'default',
    gulp.parallel('css', 'fonts', 'js', 'images')
  );
  gulp.watch('./src/assets/css/**/*.css', gulp.series('css'));
  gulp.watch('./src/assets/fonts/*', gulp.series('fonts'));
  gulp.watch('./src/assets/img/**/*', gulp.series('images'));
  gulp.watch('./src/assets/js/*.js', gulp.series('js'));
});

gulp.task('cachebust', function (done) {
  return fs.writeFile('./.cachebust', Date.now().toString(), done);
});

gulp.task(
  'default',
  gulp.parallel('css', 'fonts', 'js', 'images', 'cachebust')
);
