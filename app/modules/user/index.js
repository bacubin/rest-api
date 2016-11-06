var User = require('./user.js');
module.exports = function (app) {
    app.get('/users', function (req, res) {
        try {
            return User.list();
        } catch (err) {
            throw err;
        }
    });
};
