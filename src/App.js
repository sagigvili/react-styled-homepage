// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Body />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </main>
    </div>
  );
}
export default App;
