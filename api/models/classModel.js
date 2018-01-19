const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    startTime:{
        type: Number,
        required: true
    },
    endTime:{
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    style: {
        type: String,
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

module.exports = mongoose.model('Class', classSchema);