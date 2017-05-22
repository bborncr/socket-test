
var g = new JustGage({
  id: "gauge",
  value: 0,
  min: -10,
  max: 10,
  relativeGaugeSize: true
});

g.value = 0;

var socket = io.connect("http://192.168.10.245:3000");
socket.on('connect', function (data) {
  console.log('connected');
  socket.emit('connNotification', { name: 'client', status: 'connected' });
});

socket.on('message', function(data){
  console.log('received message');
  g.refresh(data.value);
});
