var dirName = process.argv[2];
var ext = process.argv[3];

var mymodule = require('./mymodule.js')

mymodule(dirName, ext, function(err, results) {
	results.forEach(function(file) {
		console.log(file);
	})
});