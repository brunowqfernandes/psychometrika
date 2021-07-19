const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Grade = require('../models/Grade');
const Book = require('../models/Book')
const Chapter = require('../models/Chapter');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {    
    const books = await Book.find().populate(['grade','chapters']);
    return res.send({books})
  }
  catch (err) {
    return res.status(400).send({error: err.message });
  }
})

router.get('/:bookId', async (req,res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    return res.send({book})
  }
  catch (err) {
    return res.status(400).send({error: 'Error loading books' });
  }
})

router.post('/create',async (req,res) => {
  try {

    const {title, grade, chapters} = req.body
    const book = await Book.create({title, grade});
    const updateGrade = await Grade.findById(grade);

    if(chapters){
      await Promise.all(chapters.map(async chapter => {
        const bookChapter = new Chapter({...chapter, book: book._id})
        
        await bookChapter.save();
        book.chapters.push(bookChapter);
      }));
    }

    await book.save();

    updateGrade.books.push(book);

    await updateGrade.save()
    
    return res.send({book});

  }
  catch (err) {
    
    return res.status(400).send({error: err.message})
    
  }
})

router.put('/update_chapters_order/:bookId', async (req,res) => {
  try {
    
    const {chaptersOrder} = req.body
    const book = await Book.findByIdAndUpdate(req.params.bookId, {chaptersOrder}, {new:true});
    await book.save();

    return res.send({book});

  }catch (err) {    
    return res.status(400).send({error: err.message})

  }
})

module.exports = app => app.use('/books', router);