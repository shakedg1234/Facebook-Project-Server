
// const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose');
// const Post = require('./post');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }], // Array of post IDs,
    friends: [String]
})

module.exports = mongoose.model('User', userSchema);