var net = require('net')
var port = process.argv[2]

var server = net.createServer(function(socket) {
	rawDate = new Date()
	data = rawDate.getFullYear() + '-' 
		+ ('0' + (rawDate.getMonth()+1)).slice(-2) + '-' 
		+ ('0' + rawDate.getDate()).slice(-2) + ' ' 
		+ ('0' + rawDate.getHours()).slice(-2) + ':' 
		+ ('0' + rawDate.getMinutes()).slice(-2)
	socket.end(data + '\n')
})
server.listen(port)