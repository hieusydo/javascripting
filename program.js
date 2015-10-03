var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, list) {
	if (err) throw err; 
	for (var i = 0; i < list.length; i++) {
		if (p.extname(list[i]) == ('.'+ ext)) {
            console.log(list[i]);			
		}
	}
});
