var Product = require('./product.js');
module.exports = function (app) {
    app.get('/products', function (req, res) {
        var list = Product.list();

        res.json({'list' : list});
    });
};
