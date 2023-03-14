const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://felipe:a1b2c3@cluster0.uignrce.mongodb.net/', {});

mongoose.Promise = global.Promise;

module.exports = mongoose