<<<<<<< HEAD
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const Navbar = (props) => {
  const location = useLocation();

  // Determine the active link based on the current pathname
  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  const [colors, setColors] = useState("white");
  const ColorHandler = () => {
    setColors("white");
    if (colors == "white") {
      setColors("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setColors("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      //
    }
  };

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <nav className="sticky">
        <div className="topnav" id="myTopnav">
          <Link
            to="/"
            relative="path"
            className={`nav-item nav-link  ${isActive("/")}`}>
            Home
          </Link>

          <Link
            to="/project"
            relative="path"
            className={`nav-item nav-link  ${isActive("/project")}`}>
            Project
          </Link>
          <Link
            to="/contact"
            relative="path"
            className={`nav-item nav-link  ${isActive("/contact")}`}>
            {" "}
            Contact
          </Link>
          <Link
            to="/about"
            relative="path"
            className={`nav-item nav-link  ${isActive("/about")}`}>
            {" "}
            About
          </Link>
          <Link
            to="/skills"
            relative="path"
            className={`nav-item nav-link  ${isActive("/skills")}`}>
            {" "}
            Skills
          </Link>

          <div className="topnav" id="togbtn">
            <Link
              onClick={ColorHandler}
              relative="path"
              className="nav-item nav-link text-white">
              <MdOutlineDarkMode size={20} />
            </Link>{" "}
          </div>
        </div>
      </nav>
    </>
  );
};
=======
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const isActive = (pathname) => (location.pathname === pathname ? "active" : "");

  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? "black" : "white";
    document.body.style.color = !isDarkMode ? "white" : "black";
  };

  // Toggle menu for mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="sticky">
        <div className="topnav">
          <div className="logo">
            <Link to="/" className={`nav-item ${isActive("/")}`}>
              Home
            </Link>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/project" className={`nav-item ${isActive("/project")}`}>
              Project
            </Link>
            <Link to="/contact" className={`nav-item ${isActive("/contact")}`}>
              Contact
            </Link>
            <Link to="/about" className={`nav-item ${isActive("/about")}`}>
              About
            </Link>
            <Link to="/skills" className={`nav-item ${isActive("/skills")}`}>
              Skills
            </Link>
          </div>

          {/* Dark Mode Button */}
          <div className="dark-mode-btn">
            <button onClick={toggleDarkMode} className="nav-item">
              <MdOutlineDarkMode size={20} />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          
          <div className="menu-toggle" onClick={toggleMenu}>
            
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-item ${isActive("/")}`} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/project" className={`nav-item ${isActive("/project")}`} onClick={toggleMenu}>
          Project
        </Link>
        <Link to="/contact" className={`nav-item ${isActive("/contact")}`} onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/about" className={`nav-item ${isActive("/about")}`} onClick={toggleMenu}>
          About
        </Link>
        <Link to="/skills" className={`nav-item ${isActive("/skills")}`} onClick={toggleMenu}>
          Skills
        </Link>
      </div>
    </>
  );
};

>>>>>>> 4e0713b (Initial commit)
export default Navbar;
