var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
    res.send('Hello World! I\'m doing some stuff!!!');
});
 
app.get('/status', function(req, res) {
    res.send('Status OK 200');
});
 
var port = 7080;
app.listen(port, function() {
    console.log('Server is running on port : ' + port)
});
