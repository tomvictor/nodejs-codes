 
 var express = require('express'),
 	app = express(),
 	path = require('path')

 app.set('views',path.join(__dirname,'views'));
 app.engine('html',require('hogan-express'));
 app.set('view engine','html');
 app.use(express.static(path.join(__dirname,'public')));

 app.route('/').get(function (req,res,next) {
 	// body...
 	// res.send('<h1>hello world</h1>');
 	res.render('index');
 })

 app.listen(3000,function () {
 	// body...
 	console.log('chating app working on port 3000')
 })