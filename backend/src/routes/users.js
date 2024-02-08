const {Router} = require('express');

const usersRoutes = Router();

// usersRoutes.get('/api/users', (req, res) => {
//     res.send('User Routes');
// });

usersRoutes.route('/')
    .get((req, res) => {
        res.send('Rutas de usuario');
    })
//     .post()

// usersRoutes.route('/:id')
//     .get((req, res) => {
//         res.send(`Hola usuario de id: ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.send(`Actualizando al usuario de id: ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         res.send(`Eliminando al usuario de id: ${req.params.id}`)
//     });

module.exports = usersRoutes;
