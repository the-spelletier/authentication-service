const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

module.exports.set = app => {

    // ENDPOINTS
    app.get('/', function (req, res) {
        res.status(200);
        res.send({
            message: "This is a simple authentication service"
        });
    });

    authRouter.set(app);
    userRouter.set(app);
}