const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const userService = require('../services/userService');

const verifyAuth = (req, res, next) => {
    
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.sendStatus(401);
    }

    let authToken = authHeader.split(' ')[1];
    if (!authToken) {
        return res.status(401).send({ 
            message: 'No authorization token sent.' 
        });
    }

    jwt.verify(authToken, settings.jwtSecret, { algorithms: ['HS256'] }, (err, payload) => {
        if (err) {
            return res.status(401).send({ 
                message: 'Token verification failed.' 
            });
        }

        userService.getUser({
            id: payload.id
        }).then(user => {
            if (user) {
                req.user = user;
                next();
            } else {
                return res.status(401).send({
                    message: 'Invalid user'
                });
            }
        }).catch(err => {
            return res.status(401).send({
                message: 'An unexpected error occurred'
            });
        })
    });
};

module.exports = {
    verifyAuth
};