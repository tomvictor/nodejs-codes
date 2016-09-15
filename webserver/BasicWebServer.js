var http =require('http'),
	host = '127.0.0.1',
	fs = require('fs'),
	path = require('path'),
	port = '9000';

var mimes = {
	".htm" : "text/html",
	".css" : "text/css",
	".js" : "text/javascript",
	".gif": "image/gif",
	".jpg" : "image/jpeg",
	".png" : "image/png"
	}

var server = http.createServer(function(req, res){
	var filepath = (req.url === '/') ? ('./index.htm'): ('.' + req.url);
	// check to see if the file eists

}).listen(port,host,function () {
	// body...
	console.log('server Running on http://' + host + ':' + port);
})