const authController = require('../controllers/authController');

module.exports.set = app => {

    // ENDPOINTS
    app.post('/api/signin', 
        authController.signin
    );

    app.post('/api/signout', function (req, res) {
        
        res.status(200);
        res.send({
            message: `logged out`
        });
    });

    app.post('/api/signup', function (req, res) {
        
        res.status(200);
        res.send({
            message: `signed up`
        });
    });
}