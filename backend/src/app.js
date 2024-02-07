const express = require('express');

const app = express();

app.set('serverName', 'Learning Stack MERN');
app.set('port', 4000);

app.use('/', (req, res) => {
    res.send('holaaaaa');
});

module.exports = app;