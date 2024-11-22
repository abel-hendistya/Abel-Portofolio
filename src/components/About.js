import React from 'react';
import './About.css';
import fbImage from "../assets/WhatsApp Image 2024-11-21 at 12.11.02_b72185c8.jpg"; // Import foto Anda

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="header-line">
          <span className="dots"></span>
          <div className="line"></div>
        </div>
        <h2 className="title">Who I am</h2>
        <p className="description">
          My name is Abel. I am an Information Technology student at Aisyiyah University Yogyakarta.
        </p>
        <p className="description">
        I am fond of various sports such as swimming, futsal, and mountain climbing,
         which help me keep fit. In addition, I also like to explore new places to broaden my horizons and gain experience.
        </p>
      </div>
      <div className="about-image">
        <img src={fbImage} alt="Your Profile"></img>
      </div>
    </div>
  );
}

export default About;
