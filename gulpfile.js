const { series } = require('gulp');

function build(cb) {
  // здесь ваша логика сборки: копирование, транспиляция и т.п.
  cb();
}

exports.build = series(build);
