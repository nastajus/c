var model = require('./js/model');
var utils = require('./js/utils');
var mock = require('./js/mock');
var express = require('express');
const bodyParser = require('body-parser');

app = express();

app.set('view engine', 'ejs');


//body-parser deprecated bodyParser: use individual json/urlencoded middlewares at app.js:16:9
//body-parser deprecated undefined extended: provide extended option at node_modules\body-parser\index.js:105:29
//app.use(bodyParser());

//???
//app.use(bodyParser.urlencoded({ extended: true }));

// configure the app to use bodyParser()
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedParser);
app.use(bodyParser.json());




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

/*
app.post('/', function (req, res) {
	console.log(req.body);
	//res.render('the_template', { name: req.body.name });
	res.render('index', { employees: model.employees });
});
*/

//app.post('/', (req, res, next) => { console.log(req.body); }) ;

app.post('/sub', function(req, res) {

	console.log(req.body);
});

app.post('/doother/{asdas}', function(req, res) {

	console.log(req.body);
});

app.listen(3000, function () {
  console.log('example app is listening on port 3000');
});