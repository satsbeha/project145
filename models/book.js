const { ObjectID } = require('mongodb');
const getDb = require('../utils/database').getDb;

module.exports = class Book {

    constructor(_id, isbn, title,overdueFee, publisher,datePublished) {
        this._id = _id;
        this.isbn= isbn;
        this.title = title;
        this.overdueFee = overdueFee;
        this.publisher = publisher;
        this.datePublished = datePublished;
    
    }

    save() {
        return getDb().collection('Books').insertOne(this);
    }

    update() {
        return getDb().collection('Books').updateOne({ _id: new ObjectID(this._id) }, { $set: { isbn: this.isbn, title: this.title,  overdueFee: this.overdueFee,publisher: this.publisher} });
    }

    static fetchAll() {
        console.log("1111..")
      
        return getDb().collection('Books').find().toArray();
        
    }

    static findById(bookId) {
        return getDb().collection('Books').findOne({ _id: new ObjectID(bookId) });
    }

    static deleteById(bookId) {
        return getDb().collection('Books').deleteOne({ _id: new ObjectID(bookId) });
    }

}