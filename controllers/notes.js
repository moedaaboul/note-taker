let noteData = require('../db/db.json');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const writeToFile = require('../helpers');

const filePath = path.join(__dirname, '../db/db.json');

const getAllNotes = (req, res) => {
  res.status(StatusCodes.OK).json(noteData);
};

const createNote = (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    noteData.push(newNote);
    writeToFile(filePath, noteData);
    res.status(StatusCodes.CREATED).json('created');
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error in posting note');
  }
};

const deleteNote = (req, res) => {
  const { id: noteID } = req.params;
  if (noteID) {
    noteData = noteData.filter((e) => e.id !== noteID);
    writeToFile(filePath, noteData);
    res.status(StatusCodes.CREATED).send();
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error in deleting');
  }
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
};
