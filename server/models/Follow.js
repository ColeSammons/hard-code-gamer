const { Schema } = require('mongoose');

const followSchema = new Schema({
    streamName: {
        type: String
    }
});

module.exports = followSchema;
