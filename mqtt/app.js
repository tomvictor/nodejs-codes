
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect',function(){
	client.subscribe('presence')
	client.publish('presence','hello mqtt')
})

client.on('messsage',function(topic,messsage){
	console.log(messsage.toString());
	client.end();

})