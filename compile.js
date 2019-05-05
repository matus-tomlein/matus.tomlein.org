var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

let isDebug = !process.argv.includes('prod');

if (isDebug) {
	console.log('DEVELOPMENT');
} else {
	console.log('PRODUCTION');
}

var b = browserify({ debug: isDebug })
  .add('./app/index.js')
  .transform('babelify', { presets: ['es2015', 'react'] })
  .transform('uglifyify', { global: true })
  .plugin(watchify)
  .on('update', bundle);

bundle([]);

function bundle(ids) {
  console.log();
  console.log('+++');
  console.log('Changed bundles: ' + ids.join(' '));
  let timer = 'Bundling';
  console.time(timer);
  b.bundle()
    .on('error', function (err) {
      console.log(err.message);
      console.log('---');
      this.emit('end');
    })
    .on('end', () => {
      console.timeEnd(timer);
      console.log('---');

      fs.readFile('version.txt', 'utf8', (err, data) => {
        if (err) { return console.log(err); }
        let version = parseInt(data);
        version += 1;

        fs.writeFile('version.txt', String(version), (err) => {
          if (err) { return console.log(err); }
        });
      });
    })
    .pipe(fs.createWriteStream('./scripts/app.js'));
}
