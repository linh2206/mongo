// const mongoose = require('mongoose');
// // connect to mongodb
// mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
// mongoose.connection.once('open', function(err, db) {
//         console.log('ket noi thuc hien');
//         var customers = db.collection('customers');
//         var data = { 
//         _id: 3, 
//         status: "a", 
//         lastModified: ISODate("2013-10-02T01:11:18.965Z")
//      }
//         customers.insertOne(data, function (err,res) {
//             //neu xay ra loi
//             if (err) throw err;
//             //neu khong co loi
//             console.log('Them thanh cong');
//         });
//         db.close();
//     }).on('error', function(error) {
//         console.log('ket noi bi loi:', error);
//     })
// var mongoClient = require('mongodb').MongoClient;
// mongoClient.connect('mongodb://localhost/test',{ useUnifiedTopology: true },{useNewUrlParser: true}, function(err, db) {
//     if (err) throw err;
//     //use product collection
//     const customers = db.collection('customers');
//     const data = {
//         _id: 3, 
//         status: "a", 
//         lastModified: ISODate("2013-10-02T01:11:18.965Z")
//     }
//     customers.insertOne(data, function (err,res) {
//         //neu xay ra loi
//         if (err) throw err;
//         //neu khong co loi
//         console.log('Them thanh cong');
//     });
//     db.close();
// });
   
// Importing MongoClient from mongodb driver 
const { MongoClient } = require('mongodb'); 

// Conencting to a local port 
const uri = 'mongodb://localhost:27017'; 

const client = new MongoClient(uri, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true
}); 

connect(); 

// ESNext syntax using async-await 
async function connect() { 
  try { 
    await client.connect(); 
    const db = client.db('test'); 
         
        
        const customers = db.collection('query');

        // const insert = await customers.insertOne(
        //     { _id: 4, status: "a", lastModified: Date("2013-10-02 01:11:18")}
        // );
        //console.log(insert.modifiedCount);

        // const insert = customers.find();
        // const data = await insert.toArray();
        // console.table(data);
    

        const Update = await customers.updateMany( 
           
          { },
          { $pullAll: { tags: ['red']}}
           
        
        )
        
        // console.table(Update.modifiedCount);

        const cursorFind = customers.find(); 
        const data = await cursorFind.toArray(); 
        console.table(data); 
        // console.log(Successfully connected to db ${db.databaseName});
  } 
  catch (err) { 
    console.error(err.message); 
  } 
  finally { 
    client.close(); 
  } 
}