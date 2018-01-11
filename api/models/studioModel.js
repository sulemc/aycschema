const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    website:{
        type:String,
    },
    picture: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    cost: {
        type: [Number]
    },
    events: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Event"
    },
    guestEvents: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'guestEvent'  
    },
    teachers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Teacher"
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

module.exports = mongoose.model('Studio', studioSchema);