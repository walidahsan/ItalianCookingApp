import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
