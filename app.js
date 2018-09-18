// Requires
const express = require('express');
const app = express();
require('dotenv').config();

// Require router
const indexRouter =require('./routes/index.router');

// Port
const port = process.env.PORT || 4600;

// Required for production build
app.use(express.static('./client/build'));

// Use Router
app.use('/', indexRouter);

// Listener
app.listen(port, function() {
    console.log('Listening on port ', port);
});

// Export
exports = module.exports = app;