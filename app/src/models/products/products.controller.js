const ProductsModel = require('./products.model');

module.exports = {
    save: (req, res) => {
        ProductsModel.create(new ProductsModel(req.body), (err, product) => {
            res.status(200).json(product);
        });
    },
    listAll: (req, res) => {
        ProductsModel.find()
            .exec((err, products) => {
                res.status(200).json(products);
            });
    },
    removeAll: (req, res) => {
        ProductsModel.remove()
            .exec((err, data) => {
                res.status(200).json(data);
            });
    }
}

