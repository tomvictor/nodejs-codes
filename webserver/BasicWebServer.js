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
	var contentType = mimes[path.extname(filepath)]
	// check to see if the file eists
	fs.exists(filepath, function (file_exists) {
		// body...
		if (file_exists) {
			// read and serve
			fs.readFile(filepath,function (error, content) {
				// body...
				if (error) {
					res.writeHead(500);
					res.end();
				} else{
					res.writeHead(200, {'Content-Type' : contentType}); 
					res.end(content, 'utf-8');
				}
			})
		}else{
			res.writeHead(404);
			res.end("sorry we could not find the file you requested !");
		}
	})

}).listen(port,host,function () {
	// body...
	console.log('server Running on http://' + host + ':' + port);
})



