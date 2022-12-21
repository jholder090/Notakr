const router = require('express').Router();
const Note = require('../db/Note')

// api/notes
router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (err) {
    next(err)
  }
})

module.exports = router;
