 var express = require('express'),
 	app = express();

 app.route('/').get(function (req,res,next) {
 	// body...
 	res.send('<h1>hello world</h1>');
 })

 app.listen(3000,function () {
 	// body...
 	console.log('chating app working on port 3000')
 })