const Kitten = require("./models/KittenModel");

function findBy(theValue, done){
    Kitten.find({name:theValue}, function(err,kittens){
        done(kittens)
    })
}


module.exports = findBy;