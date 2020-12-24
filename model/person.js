const mongoose = require('mongoose');


const personModel = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
    }, 
    age: Number,
    favoriteFood: [String],
})

module.exports = mongoose.model('Person' , personModel);