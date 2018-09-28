// @author: Sujatha Balakrishnan
// @github: sujatha012
//  Whoo!


// Require Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan'); // for debugging


// Initialize Express for debugging & body parsing
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));


// Serve Static Content
app.use(express.static(process.cwd() + '/public'));


var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nytreact';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Import the Article model
var Article = require('./src/models/Article.js');
// ---------------------------------------------------------------------------------------------------------------


// Import Routes/Controller
var router = require('./src/controllers/controller.js');
app.use('/', router);


// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Running on port: ' + port);
});