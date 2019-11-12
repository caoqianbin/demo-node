var express = require('express');
var debug = require('debug')('Blog:server');
var router = express.Router();
var users = require('../data.json');

router.get('/list', function(req, res){
  //if(typeof req.session.user !== 'undefined') {
   // req.session.destroy();
  //}
  res.render('list');
});

router.get('/login', function(req, res) {
  var nn =['']
  //if(typeof req.session.user === 'undefined') {
    //res.render('login');
    //console.log(users.users);
 // } else {
    res.render('login',{data:nn});
  //}
});

router.post('/list', function(req, res){
  var mm=['您输入的账号或密码错误']
  console.log(users.users[0].password);
  console.log(req.body.pwd);
  if(users.users[0].username === req.body.username && users.users[0].password === req.body.pwd) {
     res.render('list',{data:users.chapterList});
  }
   else {
    res.render('login',{data:mm});
  }
});


module.exports = router;
