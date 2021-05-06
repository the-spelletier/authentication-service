const { User } = require('../models');

const getUser = user => {
    return User.findOne({
        where: user,
        raw: true
    });
}

const createUser = user => {
    return User.create(user);
}

const updateUser = user => {
    return User.update(
        user, 
        { where : { id : user.id } });
}

const deleteUser = user => {
    return getUser(user)
        .then(result => {
            if (result) {
                result.deleted = true;
                result.save();
            }
            return result;
        });
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}