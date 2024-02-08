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
// const usersRoutes = require('./routes/users');
// const notesRoutes = require('./routes/notes');

app.get('/', (req, res) => {
    res.send('holaaaaa');
});

// app.use(usersRoutes);
// app.use(notesRoutes);
app.use('/',require('./routes/home'));
app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));

module.exports = app;