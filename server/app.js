// my simple code for a nodejs server

var http = require('http');

http.createServer(function (req,res) {
	// function body
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello');

}).listen(1337,'127.0.0.1')

console.log('server running @ 127.0.0.1:1337');