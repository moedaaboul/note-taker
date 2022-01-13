const noteData = require('../db/db.json');

const getAllNotes = (req, res) => {
  res.status(200).json(noteData);
};

const createNote = async (req, res) => {
  res.status(201).json('created');
};

const deleteNote = async (req, res) => {
  res.status(200).send();
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
};
