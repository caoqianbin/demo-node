#!/usr/bin/node

 const http   = require('https'),
      cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('crawler'),
      addr    = 'https://github.com/ziyeqingying/blogsucai/blob/master/%E7%B4%A0%E6%9D%90.zip';

http.get(addr,function(res){
  var result ='';

  res.on('data',(data) => {
    result += data;
  });

  res.on('end',() => {
    print(result);

    //page parse
    
    var $ = cheerio.load(result);
    $('body').find('.card-body').each(function(){
      print($(this).html());
      var cName = $(this).find('.card-title>a').text(),
          cURL = $(this).find('.card-title>a').attr('href');
      
      cURL =' https://segmentfault.com' + cURL;
      if(cName === '') return;

      log('课程地址：',cName);
      log('课程地址：',cURL);
      log('');
    });
  });
});





