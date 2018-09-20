// Requires
const express = require('express');
const app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
require('dotenv').config();

// Require router
const indexRouter =require('./routes/index.router');
const productsRouter = require('./routes/products.router');

// Port
const port = process.env.PORT || 4600;

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/products");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: true}));

// Required for production build
app.use(express.static('./client/build'));

// Use Router
app.use('/products', productsRouter);
app.use('/', indexRouter);

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

// Export
exports = module.exports = app;