const { Schema } = require('mongoose');

const videoSchema = new Schema({
    youtubeID: {
        type: String
    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = videoSchema;