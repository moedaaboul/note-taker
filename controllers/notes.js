const getAllNotes = async (req, res) => {
  res.status(200).json('successful');
};

const createNote = async (req, res) => {
  res.status(201).json('created');
};

const deleteNote = async (req, res) => {
  res.status(200).send();
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
};
