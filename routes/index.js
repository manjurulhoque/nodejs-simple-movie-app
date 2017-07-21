var moviesJSON = require('../movies.json');

//home
exports.home = function(req, res) {
  var movies = moviesJSON.movies;
  res.render('home', {
    title : "Simple Node js movie app",
    movies : movies
  });
};

exports.movie_single = function(req, res) {
  	var number = req.params.number;
  	var movies = moviesJSON.movies;

	// Only render the movie_single template for episodes that exist
	if (number >= 1 && number <= 6) {

		var movie = movies[number - 1];

		var title = movie.title;

		var main_characters = movie.main_characters;
		
		res.render('single', {
			movies : movies,
			movie : movie,
			title : title,
			main_characters : main_characters
		});

	} else {
		res.send('This page is not available');
	}
};

exports.not_found =  function(req, res){
  res.send('This page is not available');
};