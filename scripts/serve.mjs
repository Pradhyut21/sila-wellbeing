import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.PORT || 4173);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.mp4':'video/mp4','.srt':'text/plain; charset=utf-8','.vtt':'text/vtt; charset=utf-8'};
http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const info = await stat(file);
    if (!info.isFile()) throw new Error('Not a file');
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port,'127.0.0.1',()=>console.log(`SILA local preview: http://127.0.0.1:${port}`));
