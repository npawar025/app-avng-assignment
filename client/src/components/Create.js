// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [note, setNote] = useState("");

//   useEffect(() => {
//     // Load previously saved data from localStorage
//     const savedTitle = localStorage.getItem("title");
//     const savedNote = localStorage.getItem("note");
//     if (savedTitle && savedNote) {
//       setTitle(savedTitle);
//       setNote(savedNote);
//     }
//   }, []);

//   const handleTitleChange = (event) => {
//     const newTitle = event.target.value;
//     setTitle(newTitle);
//     // Save the title to localStorage
//     localStorage.setItem("title", newTitle);
//   };

//   const handleNoteChange = (value) => {
//     setNote(value);
//     // Save the note to localStorage
//     localStorage.setItem("note", value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       title: title,
//       note: note,
//     };
//     Axios.post(`http://localhost:5000/new-note`, noteObject).then(() => {
//       alert("Saved Successfully");
//       handleSave();
//     });
//   };

//   const handleSave = () => {
//     setTitle("");
//     setNote("");
//     localStorage.removeItem("title");
//     localStorage.removeItem("note");
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">
//               Title
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="title"
//               value={title}
//               onChange={handleTitleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">
//               Note
//             </label>
//             <ReactQuill theme="snow" value={note} onChange={handleNoteChange} />
//           </div>
//           <button className="btn btn-warning" type="submit">
//             Save Notes
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Create;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    // Load previously saved data from localStorage
    const savedTitle = localStorage.getItem("title");
    const savedNote = localStorage.getItem("note");
    if (savedTitle && savedNote) {
      setTitle(savedTitle);
      setNote(savedNote);
    }
  }, []);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    // Save the title to localStorage
    localStorage.setItem("title", newTitle);
  };

  const handleNoteChange = (value) => {
    setNote(value);
    // Save the note to localStorage
    localStorage.setItem("note", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteObject = {
      title: title,
      note: note,
    };
    Axios.post(`http://localhost:5000/new-note`, noteObject).then(() => {
      alert("Saved Successfully");
      handleSave();
      navigate("/all-notes"); // Redirect to all notes page
    });
  };

  const handleSave = () => {
    setTitle("");
    setNote("");
    localStorage.removeItem("title");
    localStorage.removeItem("note");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
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
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Note
            </label>
            <ReactQuill theme="snow" value={note} onChange={handleNoteChange} />
          </div>
          <button className="btn btn-warning" type="submit">
            Save Notes
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
