var http = require('http')
var url = require('url')
var port = process.argv[2]
var server = http.createServer(function(req, res) {
	var pathname = url.parse(req.url, true).pathname
	var timeStr = url.parse(req.url, true).query.iso
	var result
	if (pathname == '/api/parsetime') {
		result = getTime(timeStr)
	}
	else if (pathname == '/api/unixtime') {
		result = getUnixTime(timeStr)
	}
	
	if(result) {
		res.writeHead(200, {'Content-Type' : 'application/json'})
		res.end(JSON.stringify(result))
	}
	else {
		res.writeHead(404)
		res.end()
	}
})
server.listen(port)

function getTime(timeStr) {
	var date = new Date(Date.parse(timeStr))
	return {
		hour : date.getHours(),
		minute : date.getMinutes(),
		second : date.getSeconds()
	}
}

function getUnixTime(timeStr) {
	return {
		unixtime: Date.parse(timeStr)
	}
}