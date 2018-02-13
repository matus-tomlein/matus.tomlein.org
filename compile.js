var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');

var b = browserify({ debug: true })
    .add('./app/index.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
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
