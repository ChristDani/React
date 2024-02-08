const userCtrl = {};

const User = require('../models/user');

userCtrl.getUsers = async (req, res) => {
    const userList = await User.find();
    // res.json({message: `${req.method} - Request`});
    res.json(userList);
};

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username: username
    });
    await newUser.save();
    // res.json({message: `${req.method} - Request`});
    res.json({message : `Usuario creado.`});
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    // res.json({message : `${req.method} - Eliminando al usuario de id: ${req.params.id}`})
    res.json({message : `Usuario eliminado.`});
};

userCtrl.notFound = (req, res) => {
    res.json({message : `La ruta ${req.url} aun no ha sido asignada con el método ${req.method}.`});
};

module.exports = userCtrl;