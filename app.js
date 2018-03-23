var model = require('./model');
var express = require('express');

app = express();

//app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  //res.sendFile(__dirname + '/public/index.html');
  res.render('index', { posts: model.posts })
});

model.category = "asdf";
model.date = "1q2qwe24";

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});