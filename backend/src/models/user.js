const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},
{
    timestamps: true // guarda la fecha de los movimientos del esquema
});

module.exports = model('USER', userSchema);