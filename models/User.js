const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        maxlength: 100, 
        trim: true, 
        unique: true 
    }, 
    password: { 
        type: String, 
        required: true 
    } 
})

const User = new mongoose.model('User', userSchema); 
module.exports = User; 
