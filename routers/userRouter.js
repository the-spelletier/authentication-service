const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

module.exports.set = app => {

    // ENDPOINTS
    app.get('/api/user',
        authMiddleware.verifyAuth,
        userController.get
    );

    app.post('/api/user', 
        authMiddleware.verifyAuth,
        userController.create
    );

    app.put('/api/user', 
        authMiddleware.verifyAuth,
        userController.update
    );

    app.delete('/api/user', 
        authMiddleware.verifyAuth,
        userController.remove
    );
}