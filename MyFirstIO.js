var fs = requires('fs')
var filePath = process.argv[2];
var stringBuffer;

stringBuffer.toString(fs.readFileSync(filePath));

console.log(stringBuffer.split(\n).length);