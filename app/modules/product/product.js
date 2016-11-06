var Product = function() {};

Product.prototype.init = function () {

};

Product.prototype.create = function (data) {

};

Product.prototype.edit = function (data) {

};

Product.prototype.list = function (filters, offset, limit) {
    filters = typeof filters !== 'undefined' ? filters : [];
    offset  = typeof offset !== 'undefined' ? offset : 0;
    limit   = typeof limit !== 'undefined' ? limit : 50;

    return [filters, offset, limit];
};

module.exports = new Product();
