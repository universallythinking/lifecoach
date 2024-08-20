var unirest = require('unirest');
var express = require('express'); // Express web server framework
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var app2 = express();

app2.use(express.static(__dirname + '/public'))
    .use(cookieParser());

app2.get('/', function (req, res) {
    res.redirect("/index.html");
});

app2.get('/triviaquotes', function (req, res) {
  var famous = {};
  var movies = {};
  unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10")
  .header("X-Mashape-Key", "yLMKH1OWbZmshZGx8WHCEb5rPqgWp18cX8ejsn2PlWlUpUROPY")
  .header("Accept", "application/json")
  .end(function (result) {
    famous = result.body;
  });
  setTimeout(function() {
      unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10")
      .header("X-Mashape-Key", "yLMKH1OWbZmshZGx8WHCEb5rPqgWp18cX8ejsn2PlWlUpUROPY")
      .header("Accept", "application/json")
      .end(function (movRes) {
        movies = movRes.body;
        var body = {};
        body.first = famous;
        body.second = movies;
        console.log(body);
        res.send(body); res.end();
    });
  }, 1500);
});

app2.listen(process.env.PORT || 5000);
