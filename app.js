var model = require('./js/model');
var utils = require('./js/utils');
var mock = require('./js/mock');
var express = require('express');

app = express();

app.set('view engine', 'ejs');


var lorem_ipsum = mock.lorem_ipsum.split(' ');

for (var i = 0; i < 4; i++) {
	var e = new model.Employee();
	e.employeeName = utils.random(lorem_ipsum);
	e.employeeName = utils.capitalize(e.employeeName);
	e.employeeAddress = utils.random(mock.addresses)["street"];
	model.employees.push(e);
}

app.get('/', function(req, res) {
	res.render('index', { employees: model.employees });
});

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});