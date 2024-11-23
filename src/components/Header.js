import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {}
      <header className={`header ${isScrolled ? "header-small" : ""}`}>
        <h1 className="logo">My Portfolio</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
        </div>
      </header>

      {}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {}
      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <ul className="menu-list" onClick={toggleMenu}>
          <li>
            <a href="#home">
              <i className="bi bi-house-door"></i> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person"></i> About
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bi bi-file-earmark-text"></i> Resume
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="bi bi-grid"></i> Projects
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="bi bi-lightbulb"></i> Skills
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-telephone"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
