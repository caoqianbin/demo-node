#!/usr/bin/node

const http = require("http");
      fs = require("fs"),
      url = require("url"),
      qs=require('querystring');
      chapterList = require("./local");



http.createServer((req,res)=>{
  //console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  //console.log(req.headers);
 // console.log('');
 console.log("你好a ：",req.url);
  console.log("你好：",req.url.substring(0,6));
  var path = url.parse(req.url).pathname;
  var path1 = path.split('/');
  var path2;
  //console.log(path1.length);

    path2 = path1.slice(2);

    

  var path3 = "./"+path2.join('/');
  var path5 = path2.join('/');
  //console.log("我是path：",path);
  //console.log("我是path1:",path1);
  //console.log("我是path2：",path2);
  console.log("我是path3",path3);
  var length = path2.length;
  
  var dirpath = path2[length-1];
  if(dirpath){
  
    var dirpath1 = dirpath.split('.')[1];
  
    //console.log("dirpath:",dirpath);
    //console.log("dirpath1:", dirpath1);
  }
switch(dirpath1){
      case 'css':
             var data=fs.readFileSync(path3);
             res.writeHead(200,{"Content-type":"text/css;charset=UTF-8"});
             res.end(data);   
             //console.log("css");        
          break;
      case 'jpg':
           var data = fs.readFileSync(path3);
           res.writeHead(200,{"Content-type":"application/x-jpg;charset=UTF-8"});
           res.end(data);           
             break;
         
      case 'jpeg':
             var data = fs.readFileSync(path3);
             res.writeHead(200,{"Content-type":"image/jpeg;charset=UTF-8"});
            res.end(data);           
            break;
      case 'png':
              var data = fs.readFileSync(path3);
              res.writeHead(200,{"Content-type":"image/png;charset=UTF-8"});
             res.end(data);           
             break;    
      case 'js':
            var data = fs.readFileSync(path3);
           res.writeHead(200,{"Content-type":"application/x-javascript;charset=UTF-8"});
            res.end(data);           
            break;
      default:
          break;
  }
 if(req.url =='/list/'){
      console.log(req.url.length);
       var data = fs.readFileSync("./chapterList.html","utf-8");
       res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
       res.end(data);
            
 }else if (req.url == "/login"){
    fs.readFile("./login.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
                      
    });
  }else if(req.url == '/detail?chapterId=4') {
    fs.readFile("./chapter.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
                      
    });
  }else if (req.url == "/addChapter"){
    fs.readFile("./addChapter.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
                  res.end(data);
                      
    });
  }else if(req.url.substring(0,6) == "/list/" && req.url.length >6 ){
   // console.log("2222222",url.parse(req.url));
   //// var cc = url.parse(req.url).search;
   // console.log("11111111111",cc);
    var data = fs.readFileSync("./chapter.html");
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    var cc = url.parse(req.url);
    console.log("444444444444",url.parse(req.url))
    console.log("3333333333333333",req.url);
    if(cc.pathname == "/list/getDetail") {
      var aa = cc.path.split('?')[2];
      var bb = aa.split('=')[2];
      console.log(bb);
      var body = JSON.stringify(chapterList[2]);
    
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain; charset="utf-8"',
        'Access-Control-Allow-Origin': '*'
      });
      console.log("我执行了",body);
      res.end(body); 
      return;
    }
     res.end(data);       
  }
else{
    fs.readFile("../."+req.url,function(err,data){
            res.end(data);
                
    });
      
  }

}).listen(8080);

function chapterId(res,i){
    var body = JSON.stringify(chapterList[i]);
    
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/plain; charset="utf-8"',
      'Access-Control-Allow-Origin': '*'
    });
    console.log("我执行了");
    res.end(body);
}