const { Schema } = require('mongoose');

const followSchema = new Schema({
    streamName: {
        type: String,
        unique: true
    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = followSchema;
