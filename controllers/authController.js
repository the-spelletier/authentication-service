const { User } = require('../models');
const userService = require('../services/userService');

function signin (req, res) {
    userService
        .authenticate(req.body)
        .then(result => {
            if (!result) {
                res.status(401).send({ message: "Authentication failed" });
            } else {
                userService.updateUser(result);
                res.send({token : result.token});
            }
        })
        .catch(err => {
            res.status(401).send({ message: err.message });
        });
}

function signout (req, res) {

}

function signup (req, res) {

}

module.exports = {
    signin,
    signout,
    signup
}