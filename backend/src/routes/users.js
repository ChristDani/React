const {Router} = require('express');
const usersRoutes = Router();

const { getUsers, createUser, deleteUser, notFound } = require('../controllers/users.controllers');

// usersRoutes.get('/api/users', (req, res) => {
//     res.send('User Routes');
// });

usersRoutes.route('/')
    // .get((req, res) => {
    //     // res.send(`${req.method} - Rutas de usuario`);
    //     res.json({message: `${req.method} - Request`});
    // })
    .get(getUsers)
    // .post((req, res) => {
    //     // res.send(`${req.method} - Rutas de usuario`);
    //     res.json({message: `${req.method} - Request`});
    // });
    .post(createUser);

usersRoutes.route('/:id')
    // .delete((req, res) => {
    //     // res.send(`${req.method} - Eliminando al usuario de id: ${req.params.id}`)
    //     res.json({message : `${req.method} - Eliminando al usuario de id: ${req.params.id}`})
    // });
    .delete(deleteUser);

// usersRoutes.use((req, res) => {
//     // res.send(`La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`);
//     res.json({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});
// });
usersRoutes.use(notFound);

module.exports = usersRoutes;