// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const app = express();
const { port } = require('./config');

var jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', function(err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.get('/data', (req,res) => {
    res.json(jsonData);
});

app.listen(process.env.PORT, function() {
    console.log(`Listening on port ${port}...`);
});