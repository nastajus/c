var express = require('express');

app = express();

app.get('/', function(request, response) {
  response.send('hello world');
});

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});