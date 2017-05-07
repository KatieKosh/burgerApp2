var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var http = require("http");
var exphbs = require("express-handlebars");
var router = require("./controllers/burger_controller.js")

var port = process.env.PORT || 8080

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


app.use('/', router);

app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

//var routes = require("./views/index");

//app.use("/", routes);

// var serverOne = http.createServer(handleRequestOne);

app.get("/", function(req, res) {

    var data = { 'hello': 'world' }
    res.render('index', data);
});

app.listen(port, function() {
    console.log("listening on", port);

});
