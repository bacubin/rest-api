module.exports = function(app) {
    require('./user')(app);
    require('./product')(app);
};