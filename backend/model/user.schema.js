const mongoose = require('mongoose')

const users = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    }
})

const USER = mongoose.model("USER", users)

module.exports = {USER}