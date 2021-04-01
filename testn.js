// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
 
// mongoose.connect('mongodb://localhost/mongoose_basics');
// mongoose.model('authors', new Schema({ prices: Number, name: String}));
 
// var questions = mongoose.model('authors');
// questions.find({}, function(err, data) { console.log(err, data[name], data.length); 
// console.log(data.name)});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_basics');

var Cat = mongoose.model('authors', {
    name: String,
    prices: {type: Number, default: 20},
});

Cat.findOneAndUpdate({name: 'abc'}, {$set:{prices:15}},{multi: true},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
});
// Cat.findOneAndUpdate({name: "abc"}, {$set:{prices:15}},{multi: true},function(err, doc){
//     if(err){
//         console.log("Something wrong when updating data!");
//     }

//     console.log(doc);
// });
// Cat.find({name: "abc"}, {$set:{prices:15}},{multi: true},function(err, doc){
//     if(err){
//         console.log("Something wrong when updating data!");
//     }

//     console.log(doc);
// });