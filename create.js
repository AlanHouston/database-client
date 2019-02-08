const Kitten = require("./models/KittenModel");

function create(theThing,done){
    let newKitty = new Kitten(theThing);
    newKitty.save(function (err,kittens) {
        done(kittens);
        console.log(kittens);
    }); 
}

module.exports = create;