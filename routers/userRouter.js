const userController = require('../controllers/userController');

module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/user', 
        userController.get
    );

    app.post('/api/user', 
        userController.create
    );

    app.put('/api/user', 
        userController.update
    );

    app.delete('/api/user', 
        userController.remove
    );
}