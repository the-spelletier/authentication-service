const userService = require('../services/userService');

function get (req, res) {
    userService
        .getUser(req.query)
        .then(result => {
            if (!result) {
                res.status(404).send({ message: "User not found" });
            }
            else {
                delete result.password;
                delete result.token;
                res.status(200).send(result);
            }
        });
}

function create (req, res) {
    userService
        .createUser(req.body)
        .then(result => {
            if (!result) {
                res.status(404).send({ message: "User not found" });
            }
            else {
                delete result.password;
                res.status(200).send(result);
            }
        }).catch(err => {
            res.status(401).send({ message: "Unable to update the user" });
        });
}

function update (req, res) {
    userService
        .updateUser(req.body)
        .then(result => {
            if (!result) {
                res.status(404).send({ message: "User not found" });
            }
            else {
                delete result.password;
                res.status(200).send(result);
            }
        }).catch(err => {
            res.status(401).send({ message: "Unable to update the user" });
        });
}

function remove (req, res) {
    userService
        .deleteUser(req.query)
        .then(result => {
            if (!result) {
                res.status(404).send({ message: "User not found" });
            }
            else {
                delete result.password;
                res.status(200).send(result);
            }
        }).catch(err => {
            res.status(401).send({ message: "Unable to delete the user" });
        });
}

module.exports = {
    get,
    create,
    update,
    remove
}