const { Schema, model } = require('mongoose');

const followSchema = new Schema({
    streamName: {
        type: String,
        unique: true
    }
});

const Follow = model('Follow', followSchema);

module.exports = Follow;
