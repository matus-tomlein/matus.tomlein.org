const fs = require('fs');
const crypto = require('crypto');
const browserify = require('browserify');
const watch = process.argv.includes('watch');
const production = process.argv.includes('prod');
const bundler = browserify({ debug: !production, cache: {}, packageCache: {} })
  .add('./app/index.js')
  .transform('babelify', { presets: ['es2015', 'react'] });
if (production) bundler.transform('uglifyify', { global: true });
if (watch) {
  bundler.plugin(require('watchify'));
  bundler.on('update', bundle);
}
function bundle() {
  bundler.bundle((error, buffer) => {
    if (error) {
      console.error(error.message);
      if (!watch) process.exitCode = 1;
      return;
    }
    fs.writeFileSync('./scripts/app.js', buffer);
    fs.writeFileSync('./version.txt', crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 12) + '\n');
    console.log('Built scripts/app.js (' + Math.round(buffer.length / 1024) + ' KB)');
  });
}
bundle();
