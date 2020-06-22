const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose').set('debug', true);
const path = require('path');

const env = process.env.NODE_ENV || 'development';


const app = express()

env !== 'development' && app.use(express.static(path.join(__dirname, 'client/build')));


env === 'development' && app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use('/api', require('./routes/router'))

env !== 'development' && app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
  });

console.log('%c __dirname :: ', ' color: red', __dirname);
console.log('%c env :: ', ' color: red', env);
console.log('%c process.env.NODE_ENV :: ', ' color: red', process.env.NODE_ENV);

app.listen(process.env.PORT || 8080)