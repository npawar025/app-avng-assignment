import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  note: {
    type: String,
  },
  ceratedAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
