var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home', {layout:'maingraph'});
});

app.get('/admin', function(req, res){
  res.render('admin');
});

app.use(function(req, res, next){
  console.log("Looking for URL: " + req.url);
  next();
});

app.use(function(req, res){
  res.type('text/html');
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

io.on('connection', function (socket) {
  console.log('client connected');
  socket.on('connNotification', function (data) {
    console.log(data);
  });
  socket.on('disconnect', function(){
    console.log('client disconnected');
  });
  socket.on('message', function(data){
    console.log(data);
    io.emit('message', data);
  });
});

server.listen(3000, function () {
  console.log('App listening on port 3000!')
});
