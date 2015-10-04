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

//Solution
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], funion (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)