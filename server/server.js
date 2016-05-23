var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());

// Defining routes
app.use('/category', require('./routes/categories'));
app.use('/product', require('./routes/products'));
app.use('/client', require('./routes/clients'));
app.use('/sale', require('./routes/sales'));

app.listen(4000, function () {
    console.log('Server in running on port 4000!');
});
