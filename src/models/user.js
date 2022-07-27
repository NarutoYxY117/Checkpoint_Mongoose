let mongoose = require('mongoose');
let validator = require('validator');

let userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50   
    },
    age:{
        type: Number,
        required: true,
        min: 18
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        //Using the validator
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    favoriteFoods: [String],

});

module.exports = mongoose.model('users', userSchema);