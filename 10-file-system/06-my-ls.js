#!/usr/bin/node

const fs = require('fs');
      dir = process.argv[2] || __dirname;


console.log('[');
for(i=0;i<fs.readdirSync(dir).length;i++)
{
  const dst = fs.readdirSync(dir)[i];
  console.log('     '+'{"fileName":"%s","fileSize":"%d"},',fs.readdirSync(dir)[i],fs.statSync(dst).size);
}

console.log(']');
