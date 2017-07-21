var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// Routes

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//home
app.get('/', routes.home);

app.get('/movie_single/:number', routes.movie_single);

app.get('*', routes.not_found);

app.listen(3000, function(){
	console.log('Application is running on 3000');
});