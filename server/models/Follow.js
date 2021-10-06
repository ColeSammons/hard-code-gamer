const { Schema } = require('mongoose');

const followSchema = new Schema(
    {
        streamName: {
            type: String
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = followSchema;
