
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect',function(){
	client.subscribe('tom/test')
	client.publish('tom/test','hello mqtt')
})

client.on('messsage',function(topic,messsage){
	console.log(messsage.toString());
	client.end();

})