const Kitten = require("./models/KittenModel");

function findAll(done){
    Kitten.find(function(err,kittens){
        done(kittens);
    });
}

module.exports = findAll;