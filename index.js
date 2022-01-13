// load express and initialise server
const express = require('express');
const app = express();

// static assets sourced from ./public folder
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {}
};

start();
