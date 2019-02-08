const mongoose = require("mongoose");

var kittySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age: Number,
    breed: String
})

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;