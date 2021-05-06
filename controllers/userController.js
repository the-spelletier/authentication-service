const userService = require('../services/userService');

function getUser (req, res) {
    console.log(req.query);
    userService
        .getUser(req.query)
        .then(result => {
            if (!result) {
                res.status(404).send({ message: "User not found" });
            }
            else {
                delete result.password;
                console.log(result);
                res.send({user : result});
            }
        });
}

module.exports = {
    getUser
}