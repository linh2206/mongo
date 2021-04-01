var mongoose = require('mongoose');
  
 var Author = require('./author');
 var Book = require('./book');
  
 mongoose.connect('mongodb://localhost/mongoose_basics',
{ useUnifiedTopology: true , useNewUrlParser: true }, 
function (err) {
     if (err) throw err;
     
    console.log('Successfully connected');
     
    Book.find({}).sort('-created')
    .limit(10)
    .exec(function(err, books) {
        if (err) throw err;
         
        console.log(books);
    });
     
    Author.findById('5fdc6465b948e40e30f92c7a', function(err, author) {
        if (err) throw err;
         
         
        Author.save(function(err) {
            if (err) throw err;
             
            console.log('Author updated successfully');
        });
    });
     
    Author.findByIdAndUpdate('5fdc6465b948e40e30f92c7a', function(err, author) {
        if (err) throw err;
         
        console.log(author);
    });
 });