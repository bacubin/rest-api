var config = require('config');
var User = function() {
    this.config = config;
};

User.prototype.create = function (data) {

};

User.prototype.edit = function (id, data) {

};

User.prototype.delete = function (id) {

};

User.prototype.list = function (filters, offset, limit) {
    throw new Error('example');
    filters = typeof filters !== 'undefined' ? filters : [];
    offset  = typeof offset !== 'undefined' ? offset : 0;
    limit   = typeof limit !== 'undefined' ? limit : 50;
    console.log(this.config.get('default.itemPerPage'));
    return [filters, offset, limit];
};

module.exports = new User();
