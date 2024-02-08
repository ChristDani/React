const {Router} = require('express');
const notesRoutes = Router();

const { getNotes, createNote, getNote, updateNote, deleteNote, notFound } = require('../controllers/notes.controller');

// notesRoutes.get('/api/notes', (req, res) => {
//     res.send('Notes Routes');
// });

notesRoutes.route('/')
    // .get((req, res) => {
    //     // res.send(`${req.method} - Rutas de notas`);
    //     res.json({message : `${req.method} - Request`});
    // })
    .get(getNotes)
    // .post((req, res) => {
    //     // res.send(`${req.method} - Rutas de notas`);
    //     res.json({message : `${req.method} - Request`});
    // })
    .post(createNote)

notesRoutes.route('/:id')
    // .get((req, res) => {
    //     // res.send(`${req.method} - Mostrando la nota con id: ${req.params.id}`)
    //     res.send({
    //         message : `${req.method} - Mostrando la nota con id: ${req.params.id}`,
    //         id : req.params.id,
    //         titulo : "First Note",
    //         texto : "probando"
    //     })
    // })
    .get(getNote)
    // .put((req, res) => {
    //     // res.send(`${req.method} - Actualizando la nota de id: ${req.params.id}`)
    //     res.send({message : `${req.method} - Actualizando la nota de id: ${req.params.id}`})
    // })
    .put(updateNote)
    // .delete((req, res) => {
    //     // res.send(`${req.method} - Eliminando la nota de id: ${req.params.id}`)
    //     res.send({message : `${req.method} - Eliminando la nota de id: ${req.params.id}`})
    // });
    .delete(deleteNote)

// notesRoutes.use((req, res) => {
//     // res.send(`La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`);
//     res.send({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});
// });
notesRoutes.use(notFound);

module.exports = notesRoutes;