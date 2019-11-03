#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring),
      log = console.log;

var 
http.createServer((req,res) => {
  log(`\n\n${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();


  if(typeof  req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split(';');
    log(data);
  }
  



  if(req.)


}).listen(8080)
 





function showHome(req,res){
  var html =''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title></title>'
  + '</head>'
  + '<body>'
    + '<h1>Welcome</h1>'
    + '<hr>'
    + '<a href="/logout">logout</a>'
  + '</body>'
  + '</html>'



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>login</title>
</head>
<body>
<form action="/login" method="post">
  user anme:<input type ="text" name="username"><br/>
  password:<input type="password" name="password"><br/>
  <input type="submit" value="login">
</body>
</html>
