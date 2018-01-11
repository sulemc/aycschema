const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    date: {
        type: [Date],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Studio"
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
    tags: {
        type: [mongoose.Schema.ObjectId],
        ref: "Tag"
    }
});

module.exports = mongoose.model('Event', eventSchema);