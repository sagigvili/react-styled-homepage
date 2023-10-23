// src/App.js
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./components/SideNav/Sidenav";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { EC_HOMEPAGE, DEFAULT_USERNAME } from "./consts/pagesNames";
import Footer from "./components/Footer/Footer";

function App() {
  const [headerTitle, setHeaderTitle] = useState(EC_HOMEPAGE);
  const [userName, setUserName] = useState(DEFAULT_USERNAME);

  return (
    <div className="App">
      <Sidenav setHeaderTitle={setHeaderTitle} />
      <main>
        <Header title={headerTitle} username={userName} />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
export default App;
