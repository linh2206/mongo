const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost/testdb');
mongoose.connection.once('open', function() {
        console.log('ket noi thuc hien');
    }).on('error', function(error) {
        console.log('ket noi bi loi:', error);
    })
    // SQL DB: table, row, column, joins, primary key
    //mongodb: collection, document, field, embeded document/linking, primary key