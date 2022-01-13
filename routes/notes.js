const express = require('express');
const router = express.Router();

const { getAllNotes, createNote, deleteNote } = require('../controllers/notes');

// chain routes
router.route('/').get(getAllNotes).post(createNote);
router.route('/:id').delete(deleteNote);

module.exports = router;
