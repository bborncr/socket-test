
var socket = io.connect('http://192.168.86.43:3000');
socket.on('connect', function (data) {
  socket.emit('connNotification', { name: 'admin', status: 'connected' });
});

var message = {
  value: 0
};

$( "#slider" ).on('mouseup touchend', function(slider) {
  console.log(slider.currentTarget.value);
  message.value = slider.currentTarget.value;
  socket.emit('message', message);

});
