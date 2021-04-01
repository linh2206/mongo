var mongoose = require('mongoose');
  
 var bookSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: String,
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ],
    created: { 
        type: Date,
        default: Date.now
    }
 });
  
 var Book = mongoose.model('Book', bookSchema);
  
 module.exports = Book;