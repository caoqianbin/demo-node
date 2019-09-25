#!/usr/bin/node

const cp = require('child_process');

console.log('I am father with id:',process.pid);

cp.fork('./02-child.js');


global.setTimeout(function(){
  console.log('father bye');
},5000);


