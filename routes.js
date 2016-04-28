var mailer = require('./mailers/mailer');
var User = require('./models/landing');

module.exports = function(app) {

app.get('/', function(req, res) {
	res.render('index'); 
});

app.get('/portfolio', function(req, res) {
	res.render('portfolio'); 
});

app.post('/landing',function(req, res) {

	if (req.body.user === undefined) {
		console.log('missing parameter:first_name');
		return next("name not found")
	}
	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}
 	
	var user = new User({
		name:  	req.body.user,
		email:  req.body.email

	});

	mailer.contactus(req.body.user,req.body.email, req.body.message);

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');
			res.redirect('/'); 
		} else {
			console.log('ERROR: ' + err);
			res.redirect('/'); 
		}
	});		
});

app.post('/newsletter',function(req, res) {

	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}
 	
	var user = new User({
		name:  	'newsletter',
		email:  req.body.email
	});

	mailer.contactus(req.body.user,req.body.email, 'Se han inscrito al newsletter!');

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');
			res.redirect('/'); 
		} else {
			console.log('ERROR: ' + err);
			res.redirect('/'); 
		}
	});		
});

app.get('/resources', function(req, res) {
	res.render('resources/resources'); 
});

app.get('/contact', function(req, res) {
	res.render('contact'); 
});

app.get('/sql-generator', function(req, res) {
	res.render('sql-generator'); 
});

app.get('/pitch', function(req, res) {
	res.render('pitch'); 
});

app.get('/mongo-generator', function(req, res) {
	res.render('mongo-generator'); 
});

app.get('/masclientes', function(req, res) {
	res.render('landings/blue'); 
});


/*

app.get('/email', function(req, res) {
	res.render('email'); 
});

app.post('/contact', mailer.contactus);

app.get('*', function(req, res) {
	res.render('404'); 
});*/

}