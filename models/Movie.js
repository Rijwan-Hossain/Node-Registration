const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        maxlength: 100, 
        trim: true 
    }, 
    year: { 
        type: Date, 
        required: true 
    } 
}) 

const Movie = new mongoose.model('Movie', movieSchema); 
module.exports = Movie; 
