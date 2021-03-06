var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var index = require('./routes/index');

var app =  express();

app.set("port", process.env.PORT || 8080);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.home);

app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d"), app.get("port"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;