const userCtrl = {};

userCtrl.getUsers = (req, res) => {res.json({message: `${req.method} - Request`});};

userCtrl.createUser = (req, res) => {res.json({message: `${req.method} - Request`});};

userCtrl.deleteUser = (req, res) => {res.json({message : `${req.method} - Eliminando al usuario de id: ${req.params.id}`})};

userCtrl.notFound = (req, res) => {res.json({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});};

module.exports = userCtrl;