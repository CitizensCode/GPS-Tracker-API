var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

var server = app.listen(1337, function () {
  var host = 'localhost';
  var port = '1337';
  console.log('Example app listening at http://%s:%s', host, port);
});