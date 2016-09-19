
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://technoripio.cloudapp.net:8883')
 
client.on('connect', function () {
  client.subscribe('tom/test')
  client.publish('tom/test', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  //client.end()
})