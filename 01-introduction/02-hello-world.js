#!/usr/bin/node
const http = require('http');
const hostname = '192.168.112.144';
const port = 8080;

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('hello world!\n');
});
server.listen(port,hostname,()=>{
  console.log('服务器运行在 http://${hostname}:${port}/')
});
 








