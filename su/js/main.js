#!/usr/bin/node

const http = require("http");
const fs = require("fs");
const loca = require('./local');
const url = require('url');
const qs   = require('querystring');
var readImage = require("./readImages.js")

http.createServer((req,res)=>{

  console.log(req.url);
 var path = url.parse(req.url).pathname;
  var path1 = path.split('/');
  var path2 = path1.slice(2);
  var path3 = "../"+path2.join('/');
 // console.log("我是path：",path);
 // console.log("我是path1",path3);
  var dirpath = __dirname+path;
  var dirpath1 = dirpath.split('.')[1];
 // console.log("dirpath1",dirpath1);
  var dirpathh = dirpath.split('/',4);
  var dirpathhh = dirpathh.join('/')
 // console.log("我是外面dirpath:",dirpath);
 // console.log("我是外面dirpathh:",dirpathh);
  //console.log("我是外面dirpathhh:",dirpathhh);
  var dirlast = dirpathhh+"/"+path3;
 // console.log(dirlast);
 console.log(dirpath1);
  switch(dirpath1){
    
      case 'css':
            var data=fs.readFileSync(path3);
            res.writeHead(200,{"Content-type":"text/css,charset=UTF-8"});
            res.end(data);           
                
        break;
      case 'jpg':
            var data=fs.readFileSync(path3);
            res.writeHead(200,{"Content-type":"image/jpeg;charset=UTF-8"});
             res.end(data); 
             break;
      case 'js':
           var data = fs.readFileSync(path3);
             res.writeHead(200,{"Content-type":"application/x-javascript;charset=UTF-8"});
            res.end(data);           
              
        break;
  }
  if(path =='/list/'){
       fs.readFile("../chapterList.html",'utf-8',function(err,data){
         //console.log("我是dirpath:"+dirpath);
          res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
          res.end(data);      
          
    });
         
  }else if (path == "/login"){
    fs.readFile("../login.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
                      
    });
  }else if(path == '/detail?chapterId=4') {
    fs.readFile("../chapter.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
                  res.end(data);
                      
    });
  }else if (path == "/addChapter"){
    fs.readFile("../addChapter.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
                  res.end(data);
                      
    });
  }else{
    fs.readFile("../."+path,function(err,data){
            res.end(data);
                
    });
      
  }

}).listen(8080);


