const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    info: {
        type: String,
        default: null
    }
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;