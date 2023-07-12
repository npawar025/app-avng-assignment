import React, { useContext, useState } from "react";
import { itemStateContext } from "./Context";
import Axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Edit = () => {
  const { post } = useContext(itemStateContext);
  const [title, setTitle] = useState(post.title);
  const [note, setNote] = useState(post.note);

  const updateSubmit = (id) => {
    const noteObject = {
      title: title,
      note: note,
    };
    Axios.post(`http://localhost:5000/update/${id}`, noteObject).then(() =>
      alert("Updated Successfully")
    );
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Note
            </label>
            <ReactQuill theme="snow" value={note} onChange={setNote} />
          </div>
          <button
            className="btn btn-warning"
            onClick={() => updateSubmit(post._id)}
          >
            Save Notes
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
