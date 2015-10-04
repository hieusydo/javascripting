var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var fileLoc = process.argv[3]
var server = http.createServer(function(req, res) {
	fs.createReadStream(fileLoc).pipe(res)
})
server.listen(port)