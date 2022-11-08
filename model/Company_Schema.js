const mongoose = require('mongoose');

const Company_Schema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user"
    },
    companyname: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    foundedAt: {
        type: String
    },
    iS_Active: {
        type: Boolean,
        default: true
    },  
})
Company_Schema.set("timestamps", true)
module.exports = mongoose.model('company', Company_Schema)