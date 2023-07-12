import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import parse from "html-react-parser";
import { itemStateContext } from "./Context";
import { Link } from "react-router-dom";

const Notes = () => {
  const [items, setItems] = useState([]);
  const { setPost } = useContext(itemStateContext);

  useEffect(() => {
    Axios.get(`http://localhost:5000/notes`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteNote = (id) => {
    Axios.delete(`http://localhost:5000/delete-note/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <div className="container">
        {items.map((item,index) => {
          return (
            <div key={index} className="card my-3">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{parse(item.note)}</p>
                <Link to="/edit">
                  <button
                    className="btn btn-primary"
                    onClick={() => setPost(item)}
                  >
                    Edit Note
                  </button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteNote(item._id)}
                >
                  Delete Note
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
