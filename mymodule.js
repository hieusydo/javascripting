//by default, var exports = module.exports = {}
//console.log('module hello');

var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback) {
	fs.readdir(dirName, function(err, list) {
		if (err) return callback(err); 

		var results = [];
		list.forEach(function(file) {
			if (path.extname(file) == ('.'+ ext)) {
	            results.push(file);			
			}
		})

		return callback(null, results);
	});
}



// exports.printName = function() {
// 	console.log("Hi, this is Hieu");
// };

// exports.printGreeting = function() {
// 	console.log("Yay my first module is working");
// };

// var reassign = module.exports; ==> this reassign module.exports to a string, no longer var exports 
// Fix: reassign.printName = function() {
// 	console.log("Hi, this is Hieu");
// };
