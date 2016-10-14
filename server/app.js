// my simple code for a nodejs server

var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
	// function body
	res.writeHead(200, {'Content-Type': 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html')
	res.end(html);

}).listen(1337,'127.0.0.1')

console.log('server running @ 127.0.0.1:1337');