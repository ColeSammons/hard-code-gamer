const { Schema } = require('mongoose');

const videoSchema = new Schema({
    youtubeID: {
        type: String
    }
});

module.exports = videoSchema;
