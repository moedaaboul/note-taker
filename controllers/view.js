const path = require('path');

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index/notes.html'));
};

const renderNotes = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
};

module.exports = {
  renderHome,
  renderNotes,
};
