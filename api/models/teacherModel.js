const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    websites:{
        type:[String],
    },
    picture: {
        type: String,
    },
    bio: {
        type: String,
        required: true
    },
    events: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Event"
    },
    studios: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Studio"
    },
    classes : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Class"
    },
    tags: {
        type: [mongoose.Schema.ObjectId],
        ref: "Tag"
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);