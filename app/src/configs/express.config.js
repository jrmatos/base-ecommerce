const express = require('express');
const app = express();
const productsRouter = require('../models/products/products.router');
const bodyParser = require('body-parser');

module.exports = () => {

    app.use(bodyParser.json());
    app.set('port', process.env.BASE_ECOMMERCE_EXPRESS_PORT);

    // routers
    app.use('/api/products', productsRouter);

    // 404
    app.get('*', (req, res) => {
        res.send('Could not find anything for this request');
    });

    return app;
};