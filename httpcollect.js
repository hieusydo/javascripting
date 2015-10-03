var http = require('http');
var url = process.argv[2];

var results = '';

//First approach
// http.get(url, function callback(res) {
// 	res.setEncoding('utf8');
// 	res.on('data', function(data) {
// 		results += data;
// 	})
// 	res.on('err', function(err) {
// 		console.log(err);
// 	})
// 	res.on('end', function(end) {
// 		console.log(results.length);
// 		console.log(results);
// 	})
// });

// Second approach
var bl = require('bl');

http.get(url, function(res) {
	res.pipe(bl(function(err, data) {
		if (err) throw err;
		console.log(data.toString().length);
		console.log(data.toString());
	}))
})