const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type : String,
        unique: true,
        required: true
    },
    actor: {
        type: String,
        unique: false,
        default: 'Not Specified'
    },
    director: {
        type: String,
        default: 'Not Specified'
    },

});

const MovieCollection = mongoose.model('movies', movieSchema);

module.exports = MovieCollection;