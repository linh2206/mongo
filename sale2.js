var mongoose = require('mongoose');
  
 var bookSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name: String,
     prices : Number,
    created: { 
        type: Date,
        default: Date.now
    }
 });
  
 var sale2 = mongoose.model('sale2', bookSchema);
  
 module.exports = sale2;