var express = require('express');

var app = express();

app.use(express.static('lista'));

app.listen(8080, function() {
  console.log('Running on 127.0.0.1:8080...');
});