#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2] || __filname;

console.log(fs.readdirSync(dir));

