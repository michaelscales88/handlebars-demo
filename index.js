const express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.listen(8080);