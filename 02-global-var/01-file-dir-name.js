#!/user/bin/node
console.log('file name:',__filename);
console.log('dir name:',__dirname);

//方案最佳 
const path = require('path');
fileName = path.join(__dirname,'views','login.html');
console.log('fileName:',fileName);


/*var fileName = __dirname + '/views/view.html';  // 方案 1：不好，没有考虑跨平台

// 方案 2：不好，代码复杂，平台考虑不全面
witch(process.platform) {
    case 'linux':
       fileName = __dirname + '/views/view.html';
        break;

    case 'win32':
         fileName = __dirname + '\\views\\view.html';
           break;

    default:
          fileName = 'something wrong';

}

console.log('fileName:', fileName);

*/

