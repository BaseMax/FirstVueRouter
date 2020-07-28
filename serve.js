const http = require('http')
const fs = require('fs')
const httpPort = 8181

http.createServer((req, res) => {
  let file='index.html';
  console.log(req.url);
  if(req.url.startsWith("/font/") || req.url == '/style.css') {
    file=req.url.substring(1);
  }
  fs.readFile(file, 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }
    if(file !== 'index.html') {
      let format=req.url.split('.');
      // console.log(format);
      // console.log(format[format.length-1]);
      format=format[format.length-1];
      let mime='';
      if(format == 'woff') {
        mime='application/font-woff';
      }
      else if(format == 'woff2') {
        mime='font/woff2';
      }
      else if(format == 'css') {
        mime='text/css';
      }
      res.writeHead(200, {
        'Content-Type': mime+';'
      })
    }
    else {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
    }
    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
