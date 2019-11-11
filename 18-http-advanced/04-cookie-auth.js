#!/usr/bin/node
const http = require('http'),
      qs   = require('querystring');

var isLogin,mm;
var logincount=0;

http.createServer((req, res) => {
  var data = '';

  if(typeof req.headers['cookie'] === 'undefined') {
    isLogin = false;
  } else {
    var pair = req.headers['cookie'].split('=');
    isLogin = (pair[1] === 'true');
  }

  console.log(isLogin);

  if(req.method === 'POST' && req.url === '/login') {
    req.on('data', (chunk) => { data += chunk; });
    req.on('end', () => {
      var account = qs.parse(data);
      mm = account;
      if(account.user === 'zhangsan' && account.password === '123') {
        console.log('user: %s, password: %s', account.user, account.password);
        isLogin = true;
        logincount++;
        showHome(res);
      } else {
        
        showLogin1(res);
      }
    });
  }

  if(req.method === 'GET') {
    if(isLogin) {
      if(req.url === '/logout') {
        isLogin = false;
        res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);
        showLogin(res);
      } else {
        showHome(res);
      }
    } else {
      
      showLogin(res);
    }
  }
}).listen(8080);

function showLogin(res) {
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>登录</title>'
            + '  </head>'
            + '  <body>'
            + '    <form method="post" action="/login">'
            + '       <p>用户名：<input type="text" name="user"></p>'
            + '       <p>密　码：<input type="password" name="password"></p>'
            + '       <p><input type="submit" value="login"></p>'
            + '    </form>'
            + '  </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  if(isLogin)
  res.statusCode = 200;
  res.end(html);
}

function showHome(res) {
  var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>home</title>'
            + '  </head>'
          + '    <body>'
          + '       <h1>'+mm.user+'您已经成功登陆'+logincount+'次</h1>'
          + '       <a href="/login">返回主页</a>'
          + '    </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.setHeader('Set-cookie', `login=${isLogin}; max-age=600`);

  res.statusCode = 200;
  res.end(html);
}

 
function showLogin1(res){
   var html = '<!DOCTYPE html>'
            + '<html>'
            + '  <head>'
            + '    <meta charset="UTF-8">'
            + '    <title>登录</title>'
            + '  </head>'
            + '  <body>'
            + '    <form method="post" action="/login">'
            + '       <p>用户名：<input type="text" name="user"></p>'
            + '       <p>密　码：<input type="password" name="password"></p>'
            + '       <p><input type="submit" value="login"></p>'
            + '       <p style="color:red;">您输入的账号或密码错误</p>'
            + '    </form>'
            + '  </body>'
            + '</html>';

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);


}


































