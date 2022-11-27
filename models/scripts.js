//script schema here

const mongoose = require('mongoose')

const scriptSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ndc: {
        type: String,
        required: true
    },
    pharmacy: {
        type: String,
        required: true
    }
})

const Script = mongoose.model('Script', scriptSchema)    

module.exports = Script