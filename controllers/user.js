const User = require('../models').user

exports.index = (req, res) => {
    User.findAll().then(users=>res.send(users))
}