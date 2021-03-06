var express = require('express');
var bodyParser = require('body-parser');
var eventsApiRoutes = require('./events-api-routes');
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	//ou avec "www.xyz.com" à la place de "*" en production
	res.header("Access-Control-Allow-Headers",
	"Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//support parsing of JSON post data
var jsonParser = bodyParser.json() ;
app.use(jsonParser);

//les routes en /html/... seront gérées par express
//par de simples renvois des fichiers statiques du répertoire "./html"
app.use('/html', express.static(__dirname+"/html"));

app.get('/', function(req , res ) {
	// res.redirect('/html/index.html');
	res.send("Bienvenue ")
});

app.use(eventsApiRoutes.apiRouter); //delegate REST API routes to apiRouter(s)

// app.listen(8282 , function () {
// 	console.log("http://localhost:8282");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);