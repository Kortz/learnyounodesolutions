var fs = requires('fs')
var filePath = process.argv[2];
var array;

function async(){
	fs.readFile(filePath, function doneReading(err, fileContents){
		array = fileContents.split(\n);
	});	
}
async();
console.log(array.length);