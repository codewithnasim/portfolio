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
import NewsHomepage from "./project/newsdekho/NewsHomepage.jsx";

import Passgenerator from "./project/passgenerator/passwordGen.jsx";
import CurrencyConvert from "./project/currencyConverter/CurrencyConvert.jsx";
import Tictactoe from "./project/TicTacToe/Tictactoe.jsx";
import Submit from "./routes/Submit.jsx";

function App() {
  return (
    <>
      {/* <button onClick={ColorHandler}> Change mode</button> */}
      {/* <Navbar> </Navbar> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/textify" element={<TextUtils />} />
        //news dekho
        <Route path="/factnest" element={<NewsHomepage />} />
        <Route path="/passgenerator" element={<Passgenerator />} />
        <Route path="/currencyconverter" element={<CurrencyConvert />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default App;
