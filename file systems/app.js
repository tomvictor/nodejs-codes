var fs = require('fs');

var greet = fs.readFilesync(__dirname + '/greet.txt', utf8);

console.log(greet);