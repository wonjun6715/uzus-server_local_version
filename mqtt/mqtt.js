const mqtt = require('mqtt');
const bodyParser = require('body-parser');
const router = require('../routes')
const Product = require('../models/product');

const mqttAddress = 'mqtt://192.168.35.198';

const mqttClient = mqtt.connect(mqttAddress);
mqttClient.on('connect', () => {
  console.log("MQTT Connecting...");
  mqttClient.subscribe('/jehee', (err) => { // 
    if(err) {
      console.log("MQTT Connection is Fail!");
    }
    else {
      console.log("MQTT Connection is Success!");
    }
  });
});

mqttClient.on('message', async (topic, message) => {
  console.log('topic : ', topic);
  console.log('message : ', message.toString());
  const data = JSON.parse(message);

  console.log('username : ', data.username.toString());
  console.log('action : ', data.action.toString());

  const today = new Date().toLocaleString();
  const productData = new Product({
    username: data.username,
    action: data.action,
    time: today
  });
  productData.save().then(() => console.log("Save!"));
});