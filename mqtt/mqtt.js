const mqtt = require('mqtt');
const bodyParser = require('body-parser');
const router = require('../routes')
const User = require('../models/user');

const mqttAddress = 'mqtt://192.168.35.33';
const mqttTopicList = ['mqtt/name', 'mqtt/action'];

const userName = 'UzUs';


const mqttClient = mqtt.connect(mqttAddress);
mqttClient.on('connect', () => {
    console.log("MQTT Connecting...");
    mqttClient.subscribe(mqttTopicList, (err) => {
        if(err) {
            console.log("MQTT Connection is Fail!");
        }
        else {            
            console.log("MQTT Connection is Success!");
        }
    });
});

mqttClient.on('message', async (topic, message) => {
    const today = new Date().toLocaleString();
    console.log('topic : ', topic);
    console.log('message : ', message.toString());

    if(topic == 'mqtt/name') {
        const userData = new User({
            name: userName,
            action: 0,
            time: today,
        });
        userData.save().then(() => console.log("Save!"));
    }

    else {
        User.findOne({}).sort({action: -1}).exec((err, data) => {
            count = data.action + 1;
            const userData = new User({
                name: userName,
                action: count,
                time: today,
            });
            userData.save(function(err, data) {
                if(err) {
                    console.log(err);
                }   
                else {
                    console.log(data);  
                }
            });
        });
    }
});