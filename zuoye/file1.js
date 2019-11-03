#!/usr/bin/node

const fs = require('fs')
      arg = process.argv[2];
      dir = process.argv[3] || __dirname;
      file = process.argv[3];

if(arg == 'list')
{
  try{
     console.log('[');
     for(i=0;i<fs.readdirSync(dir).length;i++)
     {
       const dst = fs.readdirSync(dir)[i];
       if(i == fs.readdirSync(dir).length-1)
       {
         console.log('     '+'{"fileName":"%s","fileSize":"%d"}' + '\n',fs.readdirSync(dir)[i],fs.statSync(dst).size);
       }else{
         console.log('     '+'{"fileName":"%s","fileSize":"%d"},'+'\n',fs.readdirSync(dir)[i],fs.statSync(dst).size);
       }
     }
     console.log(']');
  }catch(err){
    console.error(err.message);
    process.exit(1);
  }

}else if(arg == 'mkdir')
{
  try{
     fs.mkdirSync(file); 
  }catch(err){
    console.error(err.message);
    process.exit(1);
  }
}
else{
  console.log("命令行错误");
}
