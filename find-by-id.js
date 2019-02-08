const Kitten = require("./models/KittenModel");

function findById(id, done){
    Kitten.findById(id, function(err,kittens){
        done(kittens);
    })
}


module.exports = findById;