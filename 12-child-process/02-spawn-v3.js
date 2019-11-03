#!/usr/bin/node

const http = require('http'),
      cp = require('child_process');

console.log('I am father process,PID:',process.pid);

http.createServer((req,res) => {
  var child = cp.spawn('../zuoye2/images/1442201163344838-lp.jpg');
  child.stdout.pipe(res);
}).listen(8080);
 






