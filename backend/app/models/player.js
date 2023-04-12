const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    signin: {
        type: Object,
        required: true
    },
    born: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Player', playerSchema);
