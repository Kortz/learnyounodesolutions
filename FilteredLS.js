var dir = process.argv[2];
var extension = "." + process.argv[3];

listFiles(){
	fs.readDir(dir, function(err, dirContents){
		dirContents.forEach(function(file){
			if(path.extname(file) = extension){
				console.log(file);
			}
		});
	});
}

listFiles();