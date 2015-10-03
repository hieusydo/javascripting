var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


http.get(url1, function(res) {
	res.pipe(bl(function(err, data) {
		if (err) throw err;
		console.log(data.toString());
		http.get(url2, function(res) {
			res.pipe(bl(function(err, data) {
				if (err) throw err;
				console.log(data.toString());
				http.get(url3, function(res) {
					res.pipe(bl(function(err, data) {
						if (err) throw err;
						console.log(data.toString());
					}))
				})
			}))
		})
	}))
})
