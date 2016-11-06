var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//load middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//load modules
require('./modules')(app);

//error handle
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.json('error', { error: err })
});

//export app
module.exports = app;