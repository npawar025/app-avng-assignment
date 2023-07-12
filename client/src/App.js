import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { itemStateContext } from "./components/Context";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Notes from "./components/Notes";
import Edit from "./components/Edit";

function App() {
  const [post, setPost] = useState([]);
  return (
    <>
      <itemStateContext.Provider value={{ post, setPost }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="all-notes" element={<Notes />} />
          <Route path="edit" element={<Edit />} />
        </Routes>
      </itemStateContext.Provider>
    </>
  );
}

export default App;
