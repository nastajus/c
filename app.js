var model = require('./model');
var utils = require('./utils');
var mock = require('./mock');
var express = require('express');

app = express();

app.set('view engine', 'ejs');



var lorem_ipsum = mock.lorem_ipsum.split(' ');


for (var i = 0; i < 4; i++) {
  var e = new model.Employee();
  e.employeeName = utils.random(lorem_ipsum);
    //e.employeeName = lorem_ipsum[Math.floor(Math.random() * lorem_ipsum.length)];
  e.employeeName = utils.capitalize(e.employeeName);
    //e.employeeName ="ian";

	//e.employeeName = utils.random(mock.addresses);
  //e.address = mock.addresses[Math.floor(Math.random() * mock.addresses.length)]["street"];
	e.employeeAddress = mock.addresses[Math.floor(Math.random() * mock.addresses.length)]["street"];
  model.employees.push(e);
}


app.get('/', function(req, res) {
  //res.render('index', { model: model });
	res.render('index', { employees: model.employees });
});


// model.category = "asdf";
// model.date = "1q2qwe24";

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});