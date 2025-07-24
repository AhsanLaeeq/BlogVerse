// src/Pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About BlogVerse</h1>
        <p>
          Welcome to <strong>BlogVerse</strong> – your personal space to express ideas,
          share stories, and connect with others through words.
        </p>
        <p>
          Whether you're a passionate writer, a casual blogger, or someone who just loves to share
          thoughts, BlogVerse provides a clean and user-friendly interface to help you bring your
          writing to life.
        </p>
        <p>
          Start writing blogs, preview them live, and manage your thoughts with ease.
        </p>
        <p>
          Built with ❤️ using <span className="tech">React</span>, <span className="tech">Markdown</span>, and <span className="tech">LocalStorage</span>.
        </p>
        <p className="signature">– Ahsan Laeeq</p>
      </div>
    </div>
  );
};

export default About;
