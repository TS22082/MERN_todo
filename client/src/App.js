import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Edit from "./Components/Pages/Edit";
import Delete from "./Components/Pages/Delete";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/Pages/About";

function App() {
  const [tasks, setTasks] = useState();
  const [newText, updateNewText] = useState();
  const [editedText, updateEditText] = useState({ editText: "", id: "" });
  const [deleteText, updateDeleteText] = useState({ deleteText: "" });

  const retrieveTasks = () => {
    axios
      .get("/all")
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  //force update
  const newTextChange = (e) => {
    updateNewText({ ...newText, [e.target.name]: e.target.value });
  };

  const newTextSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: newText.todoText }).then(() => retrieveTasks());
  };

  const editTextChange = (e) => {
    updateEditText({ ...editedText, [e.target.name]: e.target.value });
  };

  const editTextSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/edit", { id: editedText.id, text: editedText.editText })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrieveTasks();
  }, []);

  return (
    <Router>
      <Nav links={[<Link to="/">Home</Link>, <Link to="/about">About</Link>]} />

      <Switch>
        <Route exact path="/edit/:id">
          <Edit
            updateEditText={updateEditText}
            editTextChange={editTextChange}
            editTextSubmit={editTextSubmit}
            retrieveTasks={retrieveTasks}
            editedText={editedText}
          />
        </Route>
        <Route exact path="/delete/:id">
          <Delete deleteText={deleteText} updateDeleteText={updateDeleteText} />
        </Route>
        <Route exact path="/">
          <Home
            retrieveTasks={retrieveTasks}
            tasks={tasks}
            newTextChange={newTextChange}
            newTextSubmit={newTextSubmit}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
