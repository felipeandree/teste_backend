const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/projectx', {});

mongoose.Promise = global.Promise;

module.exports = mongoose