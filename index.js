// load express and initialise server
const express = require('express');
const app = express();

// parse json
app.use(express.json());

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}....`));
  } catch (error) {}
};

start();