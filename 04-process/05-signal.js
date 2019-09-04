#!/usr/bin/node

const log = console.log;

log('process id:',process.pid);

process.stdin.resume();

process.on('SIGINT',()=>{
  log('your press ctrl-c,good bye');
  process.exit();
});
 
process.on('SIGTSTP',()=>{
  log('your press ctrl-z,stoip running');
  process.exit();
});


