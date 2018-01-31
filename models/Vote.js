const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    os: {
        type: String,
        require: true
    },
    points: {
        type: String,
        require: true
    }
});


// Create collection and add schema
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;