const {Router} = require('express');

const homeRoutes = Router();

homeRoutes.route('/')
    .get((req, res) => {
        res.send('holaaa');
    });

module.exports = homeRoutes;
