var app = require('express')();
var http = require('http')
  .Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log('A new user is viewing the map');

  socket.on('disconnect', function () {
    console.log('A user has stopped viewing the map');
  });
});

// Loop through coords array and emit a new bus coord every 1000ms  var i = 0;
var coords = [{
  lat: 45.944921,
  lng: -66.687651
}, {
  lat: 45.946069,
  lng: -66.685505
}, {
  lat: 45.943652,
  lng: -66.678810
}, {
  lat: 45.940101,
  lng: -66.670570
}, {
  lat: 45.937863,
  lng: -66.668124
}, {
  lat: 45.936370,
  lng: -66.666579
}, {
  lat: 45.937922,
  lng: -66.665292
}, {
  lat: 45.939803,
  lng: -66.667395
}, {
  lat: 45.942578,
  lng: -66.673832
}, {
  lat: 45.945473,
  lng: -66.680570
}, {
  lat: 45.948188,
  lng: -66.686921
}, {
  lat: 45.948248,
  lng: -66.688380
}, {
  lat: 45.947681,
  lng: -66.690483
}, {
  lat: 45.948367,
  lng: -66.691728
}, {
  lat: 45.946845,
  lng: -66.693873
}];

var i = 0;
setInterval(function () {
  if (i >= coords.length) i = 0;
  io.emit('bus coord', coords[i]);
  i++;
}, 5000);

// // Emit bus coords that are received from the arduino and/or phone app
// socket.on('bus coord', function (location) {
//   io.emit('bus coord', location);
// });

http.listen(1338, function () {
  console.log('API server listening on *:1338');
});