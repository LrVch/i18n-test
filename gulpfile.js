const { task, dest, src, series } = require("gulp");
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const i18nextParser = require('i18next-parser');
const po2json = require('gulp-po2json');
const injectAcornStaticClassPropertyInitializer = require('acorn-static-class-property-initializer/inject');
const injectAcornStage3 = require('acorn-stage3/inject');
const injectAcornEs7 = require('acorn-es7');

task('i18next', function () {
  return src('src/**')
    .pipe(new i18nextParser({
      locales: ['ru'],
      output: 'locales/$LOCALE/$NAMESPACE.json',
      lexers: {
        js: [{
          lexer: 'JsxLexer',
          attr: 'i18nKey',
          functions: ['t'], // Array of functions to match

          // acorn config (for more information on the acorn options, see here: https://github.com/acornjs/acorn#main-parser)
          acorn: {
            sourceType: 'module',
            ecmaVersion: 9, // forward compatibility
            // Allows additional acorn plugins via the exported injector functions
            injectors: [
              injectAcornStaticClassPropertyInitializer,
              injectAcornStage3,
              injectAcornEs7,
            ],
            plugins: {
              staticClassPropertyInitializer: true,
              stage3: true,
              es7: true,
            },
          }
        }],
        jsx: [{
          lexer: 'JsxLexer',
          attr: 'i18nKey',
          functions: ['t'], // Array of functions to match

          // acorn config (for more information on the acorn options, see here: https://github.com/acornjs/acorn#main-parser)
          acorn: {
            sourceType: 'module',
            ecmaVersion: 9, // forward compatibility
            // Allows additional acorn plugins via the exported injector functions
            injectors: [
              injectAcornStaticClassPropertyInitializer,
              injectAcornStage3,
              injectAcornEs7,
            ],
            plugins: {
              staticClassPropertyInitializer: true,
              stage3: true,
              es7: true,
            },
          }
        }],
      }
    }))
    .pipe(dest('./public/locales'));
})

task('po2json', function () {
  return src(['public/locales/raw/*.po'])
    .pipe(po2json({ format: 'mf' }))
    // .pipe(flatten({ includeParents: 0 }))
    .pipe(dest('public/locales/converted'));
});

task('pot', function () {
  return src(['src/**/*.js'])
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: [
        ['babel-gettext-plugin', {
          functionNames: {
            't': ['msgid']
          },
          fileName: 'public/locales/raw/template.pot'
        }]
      ]
    }));
});

// task('default', series(i18next));