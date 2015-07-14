var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password : '',
	database : 'League_of_Legends'
});



router.get('/', function(req, res, next) {

	connection.connect();

	connection.query('SELECT * from item', function(err, rows, fields){
		if(!err){
			console.log(rows)
		} else{
			console.log(err)
		}
	});

  res.render('matchHistory', {user: "No user specified"});
});


router.get('/:userName', function(req, res, next) {
  res.render('matchHistory', {user: req.params.userName});
});

module.exports = router;