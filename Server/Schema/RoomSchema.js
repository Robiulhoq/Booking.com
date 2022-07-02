const  mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    maxPeople:{
        type: Number,
        required: true
    },
    dese:{
        type: String,
        required: true
    },
    roomNumber:[{number: Number, unavailableDate: {type: [Date]}}]
}, {
    timestamps: true });

module.exports = RoomSchema;