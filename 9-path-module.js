const path = require('path');

console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);


const lastPos = path.basename(filePath)
console.log(lastPos);

const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(resolve);

