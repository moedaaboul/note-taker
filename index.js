const express = require('express');
const path = require('path');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use(routes);

app.listen(PORT, console.log(`Server is listening on port ${PORT}....`));

module.exports = app;
