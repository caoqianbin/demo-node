#!/usr/bin/node

const user = {
  nrme:'王顶',
  age: 41,
  qq: '408542507'};
const log = console.log;

//三种占位符
log('name:%s',user.name);  //字符串类型
log('age:%d',user.age);  //整数类型
log('JSON:%j',user);  //对象类型

log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq: '+user.qq);
log('qq:${user.qq}');

console.log('Error!something wrong!');


