// Local preview with the same SPA fallback as the Apache rewrite rules.
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const types = { '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.md': 'text/plain', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.pdf': 'application/pdf' };
const server = http.createServer((request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch (error) { response.writeHead(400); response.end('Bad request'); return; }
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { response.writeHead(403); response.end('Forbidden'); return; }
  if (/\/(\.|node_modules\/|app\/|compile\.js|package(?:-lock)?\.json)/.test(pathname)) { response.writeHead(404); response.end('Not found'); return; }
  if (pathname !== '/' && fs.existsSync(file) && fs.statSync(file).isFile() && !file.endsWith('.php')) {
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(response);
    return;
  }
  if (pathname.startsWith('/api/') || pathname.startsWith('/images/') || pathname.startsWith('/styles/') || pathname.startsWith('/scripts/')) { response.writeHead(404); response.end('Not found'); return; }
  const html = fs.readFileSync(path.join(root, 'index.php'), 'utf8').replace(/<\?php[\s\S]*?\?>/g, fs.readFileSync(path.join(root, 'version.txt'), 'utf8').trim());
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(html);
});
server.listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log('Local: http://127.0.0.1:' + server.address().port));
