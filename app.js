const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const mqtt = require('./mqtt/mqtt');

const app = express();
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const mainDB = require('./models');
mainDB();

require('dotenv/config');

const indexRouter = require('./routes');
const { trusted } = require('mongoose');

app.use('/', indexRouter);


app.listen(app.get('port'), () => {
  console.log("Server Start!");
});