var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('pages/index');
});

app.get('/mycommand',function(req,res){
	res.render('pages/mycommand');
});

app.listen(8080);