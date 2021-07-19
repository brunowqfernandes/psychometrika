const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Grade = require('../models/Grade')

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find().populate({
      path: 'books',
      populate: { path: 'chapters' }
    });
    return res.send({grades})
  } catch (err) {
    return res.status(400).send({error: err.message });
  }
})

router.get('/:gradeId', async (req,res) => {
  try {
    const grade = await Grade.findById(req.params.gradeId).populate({
      path: 'books',
      populate: { path: 'chapters' }
    });
    return res.send({grade})
  } catch (err) {
    return res.status(400).send({error: 'Error loading grades' });
  }
})

router.post('/create',async (req,res) => {
  try {
    const grade = await Grade.create(req.body);
    
    return res.send({grade});

  } catch (err) {
    
    return res.status(400).send({error: err.message})
    
  }
})

module.exports = app => app.use('/grades', router);