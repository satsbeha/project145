const Book = require('../models/book');

exports.getBooks = async(req, res, next) => {
   try 
   {
    
       let book2=await Book.fetchAll()
       console.log(book2)
        res.status(200).json(book2);
    }
     catch 
     (error) {
        next(error);
   }
}

exports.getBookById = async(req, res, next) => {
    try {
        res.status(200).json(await Book.findById(req.params.bookId));
    } catch (error) {
        next(error);
    }
}

exports.save = async(req, res, next) => {
   // try {
        const book = req.body;
        console.log(book)
        const savedBook = await new Book(null, book.isbn,
             book.title,book.overdueFee,book.publisher,book.datePublished).save();
        res.status(201).json(savedBook);
   // } catch (error) {
    //    next(error);
   // }
}

exports.update = async(req, res, next) => {
    try {
        const book = req.body;
        const updatedBook = new Book(req.params.bookId, book.isbn,
            book.title,book.overdueFee,book.publisher,book.datePublished);
        await updatedBook.update();
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
}

exports.deleteById = async(req, res, next) => {
    try {
        await Book.deleteById(req.params.bookId);
        res.status(200).end();
    } catch (error) {
        next(error);
    }
}