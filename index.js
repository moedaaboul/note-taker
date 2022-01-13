// load express and initialise server
const express = require('express');
const app = express();
const notes = require('./routes/notes');

// static assets sourced from ./public folder
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// Main route
app.use('/api/v1/notes', notes);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {}
};

start();
