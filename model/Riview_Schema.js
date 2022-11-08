const mongoose = require('mongoose');

const Riview_Schema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user"
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: "company"
    },
    subject: {
        type: String,
        require: true
    },
    riview: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    iS_Active: {
        type: Boolean,
        default: true
    },
})
Riview_Schema.set("timestamps", true)
module.exports = mongoose.model('riview', Riview_Schema)