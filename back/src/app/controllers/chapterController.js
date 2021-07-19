const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Book = require('../models/Book')
const Chapter = require('../models/Chapter')

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const chapters = await Chapter.find().populate(['book']);
    return res.send({chapters})
  } catch (err) {
    return res.status(400).send({error: err.message });
  }
})

router.get('/:gradeId', async (req,res) => {
  try {
    const chapter = await Chapter.findById(req.params.gradeId);
    return res.send({chapter})
  } catch (err) {
    return res.status(400).send({error: 'Error loading books' });
  }
})

router.post('/create',async (req,res) => {
  try {
    const chapter = await Chapter.create(req.body);

    const book = await Book.findById(req.body.book);    
    
    book.chapters.push(chapter);

    book.save()
    
    return res.send({chapter});

  } catch (err) {
    
    return res.status(400).send({error: err.message})
    
  }
})

module.exports = app => app.use('/chapters', router);