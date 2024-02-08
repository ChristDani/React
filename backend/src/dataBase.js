const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/dataBaseTest'; // crea la base de datos si no existe.

mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
});

const conection = mongoose.connection;

conection.once('open', () => {
    console.log('DB conectada.');
});