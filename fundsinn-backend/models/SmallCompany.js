const mongoose = require('mongoose')

const smallCompanySchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {type: String, required: true},
    companyName: {type: String, required: true}
})

module.exports = mongoose.model('SmallCompany', smallCompanySchema)