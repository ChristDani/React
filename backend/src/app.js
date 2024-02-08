const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('serverName', 'Learning Stack MERN');
app.set('port', process.env.PORT || 4000); // si hay una variable de entorno como puerto la tomará, si no el puerto que le asignamos.

// middlewares
app.use(express.json()); // se usa para que el servidor entienda formatos json
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('holaaaaa');
});

app.get('/api/users', (req, res) => {
    res.send('User Routes');
});

app.get('/api/notes', (req, res) => {
    res.send('Notes Routes');
});

module.exports = app;