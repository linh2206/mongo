var mongoose = require('mongoose');
  
 var Author = require('./author');
 var Sale1 = require('./sale1');
 var Sale2 = require('./sale2');
  
 mongoose.connect(' mongodb://127.0.0.1:27017/mongoose_basics',
    { useUnifiedTopology: true , useNewUrlParser: true },
    function (err,db) {
     if (err) throw err;
    console.log('Successfully connected'); 
//  var author = Author.find({}, function(err, data) { console.log(err, data, data.length); });
//  Author.findOneAndUpdate({name: 'abc'}, {$set:{prices:11}},{multi: true},function(err, doc){
//     if(err){
//         console.log("Something wrong when updating data!");
//     }

//     console.log(doc);
});
//  Author.update({name:"abc"} , {$set:{prices:422}}, function(err, data) {
//      console.log( data); })
Author.findOneAndUpdate({name:"bc"} , {$set:{prices:5}},{multi:true}, function(err, dab) {
    console.log( dab);
Author.find({name:dab.name},function(err, data) {
console.log( data)
Sale1.update({name: data[0].name},{$set:{prices:data[0].prices}},function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
    });
Sale2.update({name: data[0].name},{$set:{prices:data[0].prices}},function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
    });
})
})
    
// Sale1.find({name:Author.name},function(err, doc){
//     if(err){
//         console.log("Something wrong when updating data!");
//     }

//     console.log(doc);
// });
// var sale1 = new Sale1({
//             name : Author.name,
//             prices : Author.prices
//         });
//         sale1.save(function(err) {
//                     if (err) throw err;
//                     console.log(sale1);
//                 });
// if(Author.name == Sale1.name){
//     var author = new Author({
//         _id: new mongoose.Types.ObjectId(),
//         name : 'Jamie',
//         prices : 20
//     });
//     author.save(function(err) {
//         if (err) throw err;
//         console.log(author);
//     });
//     var sale1 = new Sale1({
//                     prices : Author.prices
//                 });
//                 sale1.updateOne(function(err) {
//                     if (err) throw err;})

//     var author = new Author({
//         _id: new mongoose.Types.ObjectId(),
//         name:'abc',
//         prices : 40       
//     });
// // if(author.name == null ){
//     author.save(function(err) {
//         if (err) throw err;
//         console.log(author); 
//         var sale1 = new Sale1({
//             _id: new mongoose.Types.ObjectId(),
//             name: author.name,
//             prices : author.prices
//         });
//         sale1.save(function(err) {
//             if (err) throw err;
         
//             console.log(sale1);
//         });
//         var sale2 = new Sale2({
//             _id: new mongoose.Types.ObjectId(),
//             name: author.name,
//             prices : author.prices
//         });
//         sale2.save(function(err) {
//             if (err) throw err;
         
//             console.log(sale2);
//         });
//     });
// // }  else {console.log('aa')}
    
//  });
