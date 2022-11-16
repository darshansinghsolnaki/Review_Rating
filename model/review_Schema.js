const mongoose = require('mongoose');

const review_Schema = new mongoose.Schema({

    userID: {
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
    review: {
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


review_Schema.set("timestamps", true)
module.exports = mongoose.model('riview', review_Schema)