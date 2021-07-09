const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    cricketer_name : {
        type : String,
        required: true,
    },
    country : {
        type: String,
        required: true
    },
    number : {
        type: String,
        required: true,
        unique: true
    },
    type : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;