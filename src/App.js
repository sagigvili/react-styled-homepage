// src/App.js
import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidenav from "./components/SideNav/Sidenav";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { EC_HOMEPAGE } from "./consts/pagesNames";
import Footer from "./components/Footer/Footer";

function App() {
  const [headerTitle, setHeaderTitle] = useState(EC_HOMEPAGE);

  return (
    <div className="App">
      <Sidenav setHeaderTitle={setHeaderTitle} />
      <main>
        <Header title={headerTitle} />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
export default App;
