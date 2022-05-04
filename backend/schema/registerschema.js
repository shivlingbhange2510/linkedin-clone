const mongoose = require('mongoose')

const register = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("register" , register)