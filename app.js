const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const router = require('./router.js');
// const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
    cors({
        origin: '*'
    })
);

var options = {
    swaggerOptions: {
        url: 'http://petstore.swagger.io/v2/swagger.json'
    }
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));
// app.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.set(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});