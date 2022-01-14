const noteData = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const getAllNotes = (req, res) => {
  res.status(200).json(noteData);
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
    fs.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(noteData),
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(
            `New note titled ${newNote.title} has been written to JSON file`
          );
        }
      }
    );
    res.status(201).json('created');
  } else {
    res.status(500).json('Error in posting review');
  }
};

const deleteNote = (req, res) => {
  const { id: noteID } = req.params;
  let filteredData = noteData.filter((e) => e.id !== noteID);
  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(filteredData),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Note with id ${noteID} has been deleted from JSON file`);
      }
    }
  );
  res.status(200).send();
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
};
