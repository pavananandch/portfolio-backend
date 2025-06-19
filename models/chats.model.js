const mongoose = require('mongoose');

const ChatHistory = new mongoose.Schema({
    sessionId: {
        type: String
    },
    userInput: {
        type: String
    },
    botResponse: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const chatHistory= module.exports = mongoose.model('ChatHistory', ChatHistory);