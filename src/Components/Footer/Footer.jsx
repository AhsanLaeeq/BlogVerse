import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">BlogVerse</h2>
        <p className="tagline">Your thoughts. Your voice. Your blog.</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BlogVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
