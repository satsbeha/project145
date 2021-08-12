
/*
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true ,useNewUrlParser:true})
    .then(client => {
        console.log('Connected......');
        const db = client.db('FairfiledCityLibarary-db');
        db.collection('Books').find().toArray(function(err, doc) {
            if (err) throw err;
            // Print the result. 
            // Will print a null if there are no documents in the db.
            console.log(doc);
            // Close the DB 
            client.close();
        });
    })
    .catch(err => console.log('Error: ', err));
//exports.mongoConnect = mongoConnect;
//exports.getDb = getDb
*/
const mongodb = require('mongodb');
 
const MongoClient = mongodb.MongoClient;
let _db;  
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true , useNewUrlParser:true,})
        .then(client => {
    
            _db = client.db('FairfiledCityLibarary-db');
            callback();
             console.log("......", client)
        })
        .catch(err => console.log(err));
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw new Error('No Database Found!');
}
 
const insert = (data) => {
    _db.fairFieldCityLibrary.insert({})
}
 
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;