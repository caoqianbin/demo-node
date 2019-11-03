#!/usr/bin/node

 const addr = 'http://www.sian.com',
       http = require('http');

var isOK =false;
function get(addr){
 http.get(addr,function(res){

    //print start line
   console.log('http/${res.httpVersion} ${res.statusCode} ${res.status.Message}');

  //print response header
  console.log(res.headers);
  console.log('');

   //print response boby
  res.pipe(process.stdout);    

  if(res.statusCode < 400 && res.statusCode >= 300)
   get(res.headers.location);

 });

 console.log('abc');
 isOK = true;

}

get(addr);




