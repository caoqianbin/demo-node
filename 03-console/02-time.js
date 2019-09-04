#!/usr/bin/node

console.time('TEST');
longTask();
console.timeEnd('TEST');

function longTask(){
  var num= 0;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      num = i*j;
    }
  }
  return num;
}
console.time('DOWNLOAD-FILE');
var n = longTask();
console.timeEnd('DOWNLOAD-FILE');



