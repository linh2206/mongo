const { ObjectID } = require('mongodb');
const { Int32 } = require('mongodb');
var mongoose = require('mongoose');
 var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // idsp: mongoose.Schema.Types.ObjectId,
    name: String,
    prices : Number,
    created: { 
        type: Date,
        default: Date.now
    }
 });
  
 var Sale1 = mongoose.model('sale1', bookSchema);
  
 module.exports = Sale1;