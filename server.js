var express = require('express');
var app = express();

const static = express.static(__dirname + '/');

app.use('/', static);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//app.set('view engine', 'views');

app.listen(3000, function () {
  console.log('Start to listen on port 3000!');
});