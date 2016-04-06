var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/office',function(req,res){
    res.sendFile(path.join(__dirname+'/public/office.html'));
});

app.get('/shop',function(req,res){
    res.sendFile(path.join(__dirname+'/public/shop.html'));
});

app.get('/*',function(req,res){
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('Server in running on port 3000!');
});
