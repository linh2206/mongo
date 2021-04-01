var mongoose = require('mongoose');
  
 var authorSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    biography: String,
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
 });
  
 var Author2 = mongoose.model('Author2', authorSchema);
  
 module.exports = Author2;