import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Project from "./routes/Project.jsx";
import Home from "./routes/Home.jsx";
import Navbar from "./component/Navbar.jsx";
import Skills from "./routes/Skills.jsx";
//text util
import TextUtils from "./project/TextUtils.jsx";
//news dekho

import Business from "./project/newsdekho/Business.jsx";
import Entertainment from "./project/newsdekho/Entertainment.jsx";
import News from "./project/newsdekho/News.jsx";
import Science from "./project/newsdekho/Science.jsx";
import Sports from "./project/newsdekho/Sports.jsx";
import Technology from "./project/newsdekho/Technology.jsx";

import Passgenerator from "./project/passgenerator/passwordGen.jsx";
import CurrencyConvert from "./project/currencyConverter/CurrencyConvert.jsx";
import Tictactoe from "./project/TicTacToe/Tictactoe.jsx";
import Submit from "./routes/Submit.jsx";

function App() {
  return (
    <>
      {/* <button onClick={ColorHandler}> Change mode</button> */}
      <Navbar> </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/textutils" element={<TextUtils />} />
        //news dekho
        <Route path="/newsdekho" element={<News />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/science" element={<Science />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/passgenerator" element={<Passgenerator />} />
        <Route path="/currencyconverter" element={<CurrencyConvert />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default App;
