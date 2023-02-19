const mongoose = require('mongoose')

const corporationSchema = new mongoose.Schema({
    companyName: {type: String, required: true},
    loans: {type: Array, default: []}
})

module.exports = mongoose.model('Corporation', corporationSchema)