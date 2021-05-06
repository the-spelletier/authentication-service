'use strict';
const {
  	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        // define association here
        }
    };

    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        token: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'User',
    });
  
    return User;
};