var express = require('express');

app = express();

/*
//Express 3.
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});
*/

//Express 4
//app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function(request, response) {
  response.send('hello world');
});

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});