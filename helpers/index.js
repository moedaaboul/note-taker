const fs = require('fs');

const writeToFile = (filePath, data) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`JSON file successfully updated !`);
    }
  });
};

module.exports = writeToFile;
