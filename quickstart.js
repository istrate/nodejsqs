var mqtt = require('mqtt');

var broker = 'mqtt://quickstart.messaging.internetofthings.ibmcloud.com';
var topic = "iot-2/evt/quicktmp/fmt/json"; // you can replace quicktemp with whatever you want
var client;
var organization = "quickstart";
var deviceType = "iotsample-galileo";
var macAddress = "ABCD12341234";
var options = {};
options.clientId = "d:" + organization + ":" + deviceType + ":" + macAddress;
options.port = 1883;
var interval = setInterval(sendMessage,1000);

client = mqtt.connect(broker, options);

console.log("Connected to quickstart organization...");
console.log("Connected with macAddress:"+macAddress);
console.log("Follow https://quickstart.internetofthings.ibmcloud.com and add "+macAddress+" to see events");

function sendMessage() {
    var message = {};
    var temp = Math.floor((Math.random() * 100) + 1); //random temp
	message.temp = temp;
    console.log("Published event:"); console.log(message);
    client.publish(topic, JSON.stringify(message));
}



