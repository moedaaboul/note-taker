// load express and initialise server
const express = require('express');
const app = express();
const notes = require('./routes/notes');
const path = require('path');

// static assets sourced from ./public folder
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// Main route
app.use('/api/v1/notes', notes);

// notes route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {}
};

start();
