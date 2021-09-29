const { Schema, model } = require('mongoose');

const videoSchema = new Schema({
    youtubeID: {
        type: String,
        unique: true
    }
});

const Video = model('Video', videoSchema);

module.exports = Video;