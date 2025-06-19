const mongoose = require('mongoose');

const DemosList = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    gitUrl: {
        type: String,
        required: true
    },
    demoUrl: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const demosList= module.exports = mongoose.model('DemosList', DemosList);