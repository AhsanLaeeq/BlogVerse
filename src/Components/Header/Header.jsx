import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BlogContext } from "../Context/BlogContext";

const Header = () => {
  const { st, setst } = useContext(BlogContext);
  const [menuOpen, setMenuOpen] = useState(false); // new toggle state

  const handle = () => setst(false);
  const handlee = () => setst(true);

  const toggleMenu = () => setMenuOpen(!menuOpen); // toggle function

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="gradient-text">BlogVerse</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => { handlee(); setMenuOpen(false); }}>Home</Link>
        <Link to="/" onClick={() => { handle(); setMenuOpen(false); }}>Create</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
