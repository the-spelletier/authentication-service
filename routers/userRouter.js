const userController = require('../controllers/userController');

module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/user', 
        userController.getUser
    );
}