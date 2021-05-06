const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const userService = require('../services/userService');

const authenticate = params => {
    return userService
        .getUser({ 
            username: params.username 
        }).then(user => {
            if (!user) {
                throw new Error('Invalid credentials');
            }
            
            if (!bcrypt.compareSync(params.password || '', user.password)) {
                throw new Error('Invalid credentials');
            } 
            else {
                const payload = {
                    id: user.id,
                    name: user.username,
                };
                var result = {...user};
                result.token = jwt.sign(payload, settings.jwtSecret, {
                    algorithm: settings.jwtAlgo,
                    expiresIn: settings.ttl
                });
                return result;
            }
        }).catch(err => {
            throw err;
        });
}

const validate = params => {
    return getUser({ 
        username: params.username 
    }).then(user => {
        if (!user) {
            throw new Error('Invalid credentials');
        }
        
        if (!bcrypt.compareSync(params.password || '', user.password)) {
            throw new Error('Invalid credentials');
        } 
        else {
            // Générer le token
            const payload = {
                id: user.id,
                name: user.username,
            };
            var result = {...user};
            result.token = jwt.sign(payload, settings.jwtSecret, {
                algorithm: settings.jwtAlgo,
                expiresIn: settings.ttl
            });
            return result;
        }
    }).catch(err => {
        throw err;
    });
}

module.exports = {
    authenticate,
    validate
}
