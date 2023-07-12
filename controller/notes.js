import Note from "../models/noteModel.js";

//create a note
const createNote = async (req, res) => {
  try {
    const { title, note } = req.body;

    const newNote = new Note({
      title,
      note,
    });

    await newNote.save();
    console.log(newNote);
    res.send("OK");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//get all notes
const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//delete note
const deleteNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.send("deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//update note
const updateNote = async (req, res) => {
  try {
    let data = await Note.findByIdAndUpdate(req.params.id);
    data.title = req.body.title;
    data.note = req.body.note;

    data = await data.save();
    res.send("updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export { getAllNotes, deleteNote, createNote, updateNote };
