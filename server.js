var express = require('express');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('lista'));

app.listen(8080, function() {
  console.log('Running on 127.0.0.1:8080...');
});