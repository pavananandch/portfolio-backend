const mongoose = require('mongoose');

const VisitorsHistory = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const VisitorsData= module.exports = mongoose.model('VisitorsHistory', VisitorsHistory);