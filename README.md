# note-taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application uses an Express.js back end, saves and retrieves note data from a JSON file.

The application’s front end was already created. Task was to build the back end, connect it with the front end, and then deploy the entire application to Heroku.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Tests](#tests)
- [Features](#features)
- [Appearance](#appearance)
- [Setup](#setup)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)
- [License](#license)

## Installation

​Install dependencies using:

    npm install

## Usage

The application will be invoked by using the following command:

    npm run watch

## Directory Structure

```md
.
├── **_tests_**/
├── .github/workflows
├── assets/
├── controllers/
│ ├── notes.js
│ └── view.js
├── db/
├── helpers/
├── public/
├── routes/
│ ├── api/
│ └── view/
├── .gitignore
├── index.js
└── package.json
```

## Technologies Used

- Node.js
- Express framework
- Heroku
- JavaScript

## Tests

Routes can be tested via Postman or Insomnia. Seperate SuperTests have been added to the **tests** folder to test both GET and POST routes and could be run via the terminal using:

    npm run test

Additional testing scripts for the DELETE route could be added as an improvement.

## Features

An automated _github actions_ feature has been added to run the tests above with every git push action.

## Appearance

![My Node.js note taker app](./assets/appearance.png)

## Setup

- Text editor (VS Code recommended)
- An Internet browser (Google Chrome recommended)
- Nodejs must be installed

## Acknowledgements

- https://www.npmjs.com/package/uuid
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/nodemon
- https://www.npmjs.com/package/supertest
- https://www.npmjs.com/package/http-status-codes

## Questions

Created by: [@moedaaboul](https://github.com/moedaaboul)

Feel free to contact me via [muhammad.daaboul1989@gmail.com](muhammad.daaboul1989@gmail.com)!

## License

This work is licensed under
[MIT](#).
