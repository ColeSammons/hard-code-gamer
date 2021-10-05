const { Schema } = require('mongoose');

const videoSchema = new Schema({
    youtubeID: {
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

module.exports = videoSchema;