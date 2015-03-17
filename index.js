(function () {
  'use strict';

  var app = require('express')();
  var bodyParser = require('body-parser');
  var cors = require('cors');
  var http = require('http')
    .Server(app);

  var io = require('socket.io')
    .listen(http);

  app.use(cors());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  io.on('connection', function (socket) {
    console.log('A new user is viewing the map');

    socket.on('disconnect', function () {
      console.log('A user has stopped viewing the map');
    });
  });

  app.post('/', function (req, res) {
    console.log(req.body);
    console.log('Received post request of location from Tracker! Emitting to all sockets...');
    io.emit('bus coord', req.body);
  });

  http.listen(1338, function () {
    console.log('API server listening on *:1338');
  });
})();