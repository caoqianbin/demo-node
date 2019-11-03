#!/usr/bin/node

const http = require('http'),
      log = console.log;

var total = 1; //server requested times

http.createServer((req,res) => {
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();


  if(req.url === '/favicon.ico') return;
  log('I have require %d time',total++);

  var count =1;
  if(typeof  req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split('=');
    var  count = Number(data[1])+1;
  }
  res.statusCode = 200;
  res.setHeader('Set-cookie',`count=${count}`);

  res.end(`You have visited ${count} times`);

}).listen(8080);
 






