var express = require('express');
var app = express();

app.listen(3000);

app.get('/', function (req,res) {
	res.send('<html><h1>Hello express</h1></html>');
});