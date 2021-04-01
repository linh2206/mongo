
var mongoose = require('mongoose');
  
 var authorSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name: {
            type: String,
            required: true
    },
    prices: Number,
    created: { 
        type: Date,
        default: Date.now
    }
 });
  
 var Author = mongoose.model('Author', authorSchema);
  
 module.exports = Author;