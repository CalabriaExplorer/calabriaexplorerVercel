const { series } = require('gulp');

function build(cb) {
  console.log('✅ Gulp "build" task executed');
  cb();
}

// Экспорт основной задачи по умолчанию
exports.default = series(build);
