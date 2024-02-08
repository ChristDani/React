const {Router} = require('express');

const usersNotes = Router();

// usersNotes.get('/api/notes', (req, res) => {
//     res.send('Notes Routes');
// });

usersNotes.route('/')
    .get((req, res) => {
        res.send('Rutas de notas');
    })
//     .post()

// usersNotes.route('/:id')
//     .get((req, res) => {
//         res.send(`Mostrando la nota con id: ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.send(`Actualizando la nota de id: ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         res.send(`Eliminando la nota de id: ${req.params.id}`)
//     });

module.exports = usersNotes;