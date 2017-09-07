const express = require('express');
const router = express.Router();
const productsController = require('./products.controller');

router.get('/', productsController.listAll);
router.delete('/', productsController.removeAll);
router.post('/', productsController.save);

module.exports = router;