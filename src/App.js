// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
