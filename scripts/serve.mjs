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
    const headers = {'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Accept-Ranges':'bytes'};
    const range = req.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      let start = match?.[1] ? Number(match[1]) : 0;
      let end = match?.[2] ? Number(match[2]) : info.size - 1;
      if (match && !match[1] && match[2]) { start = Math.max(0,info.size - Number(match[2])); end = info.size - 1; }
      end = Math.min(end,info.size - 1);
      if (!match || start > end || start >= info.size) { res.writeHead(416,{'Content-Range':`bytes */${info.size}`}); res.end(); return; }
      res.writeHead(206,{...headers,'Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${info.size}`});
      res.end(req.method === 'HEAD' ? undefined : (await readFile(file)).subarray(start,end+1));
      return;
    }
    res.writeHead(200,{...headers,'Content-Length':info.size});
    res.end(req.method === 'HEAD' ? undefined : await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port,'127.0.0.1',()=>console.log(`SILA local preview: http://127.0.0.1:${port}`));
