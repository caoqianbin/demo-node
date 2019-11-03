var fs = require('fs');
module.exports = {
    login:function(req, res){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('../chapterList.html',function(err, data){
            if (err) {
                console.log(err);
                return;
            } else{
                console.log("开始读取login.html");
                res.write(data);
                res.end();//写在互调函数外面会报错的哟
            }
        })
    },
    register:function(req, res){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('../chapterList.html',function(err, data){
            if (err) {
                console.log(err);
                return;
            } else{
                console.log("开始读取login.html");
                res.write(data);
                res.end();//写在互调函数外面会报错的哟
            }
        })
    },
    showImage:function(req, res){
        res.writeHead(200, {'Content-Type':'image/jpeg'});
        fs.readFile('../images/1433907491564146.png',function(err, data){
            if (err) {
                console.log(err);
                return;
            } else{
                console.log("开始读取图片");
                res.write(data);
                res.end();//写在互调函数外面会报错的哟
            }
        })
    }
}
               

