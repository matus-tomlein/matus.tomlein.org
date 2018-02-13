var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

var b = browserify({ debug: false })
    .add('./app/index.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .transform('uglifyify', { global: true })
    .plugin(watchify)
    .on('update', bundle);

bundle([]);

function bundle(ids) {
    console.log('Changed bundles: ' + ids.join(' '));
    b.bundle()
        .on('error', function (err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(fs.createWriteStream('./scripts/app.js'));
}
