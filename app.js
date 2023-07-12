import express from "express";
import cors from "cors";
import connectDB from "./db/connect.js";
import * as dotenv from "dotenv";
import {
  createNote,
  getAllNotes,
  deleteNote,
  updateNote,
} from "./controller/notes.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Create route you need to refactor
app.post("/new-note", createNote);

//Get all the notes
app.get("/notes", getAllNotes);

//Delete
app.delete("/delete-note/:id", deleteNote);

//update
app.post("/update/:id", updateNote);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
