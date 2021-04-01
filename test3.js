var mongoose = require('mongoose');
  
 var Author = require('./author');
 var Sale2 = require('./sale2');
 var Sale1 = require('./sale1');
  
 mongoose.connect(' mongodb://127.0.0.1:27017/mongoose_basics',
    { useUnifiedTopology: true , useNewUrlParser: true },
    function (err) {
     if (err) throw err;
    console.log('Successfully connected'); 
    var author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name : 'bc',
        prices : 20
    });
    author.save(function(err) {
        if (err) throw err;
        console.log(author);
    });
    // var sale1 = new Sale1({
    // _id: new mongoose.Types.ObjectId(),
    // name: author.name,
    // prices:author.prices
    // });
    // sale1.save(function(err) {
    // if (err) throw err;
    // console.log(sale1);
    // });
             
    var sale2 = new Sale2({
    _id: new mongoose.Types.ObjectId(),
    name: author.name,
    prices: author.prices
    });
    sale2.save(function(err) {
    if (err) throw err;
    console.log(sale2);
    });
 });